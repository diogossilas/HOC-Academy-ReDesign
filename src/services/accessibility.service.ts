type A11yListener = (isEnabled: boolean) => void;

class AccessibilityService {
  private isEnabled = false;
  private lastReadText = '';
  private listeners: Set<A11yListener> = new Set();
  private hoverTimer: number | null = null;
  private cleanupFn: (() => void) | null = null;

  public get enabled(): boolean {
    return this.isEnabled;
  }

  public subscribe(listener: A11yListener): () => void {
    this.listeners.add(listener);
    listener(this.isEnabled);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.isEnabled));
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    this.notify();

    if (this.isEnabled) {
      this.speak("Acessibilidade: Leitura em voz alta ativada.");
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      this.lastReadText = '';
    }
    return this.isEnabled;
  }

  public speak(text: string) {
    if (!this.isEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (this.lastReadText === text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.1;
    window.speechSynthesis.speak(utterance);
    this.lastReadText = text;

    setTimeout(() => {
      if (this.lastReadText === text) this.lastReadText = '';
    }, 4500);
  }

  public init(): () => void {
    if (typeof window === 'undefined') return () => {};

    if (this.cleanupFn) {
      return this.cleanupFn;
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (!this.isEnabled) return;

      if (this.hoverTimer) clearTimeout(this.hoverTimer);

      this.hoverTimer = window.setTimeout(() => {
        const target = e.target as HTMLElement;
        const readableElement = target.closest('.readable, button, a, h1, h2, h3, h4, p, span, img');

        if (readableElement) {
          const text =
            readableElement.getAttribute('aria-label') ||
            (readableElement as HTMLImageElement).alt ||
            (readableElement as HTMLElement).innerText;

          if (text && text.trim().length > 0) {
            this.speak(text.trim());
          }
        }
      }, 250);
    };

    window.addEventListener('mouseover', handleMouseOver);
    this.cleanupFn = () => {
      window.removeEventListener('mouseover', handleMouseOver);
      if (this.hoverTimer) clearTimeout(this.hoverTimer);
      this.cleanupFn = null;
    };

    return this.cleanupFn;
  }
}

export const accessibilityService = new AccessibilityService();
