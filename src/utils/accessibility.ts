import { accessibilityService } from '../services/accessibility.service';

export class AccessibilityManager {
  static get isEnabled() {
    return accessibilityService.enabled;
  }

  static toggle() {
    return accessibilityService.toggle();
  }

  static speak(text: string) {
    accessibilityService.speak(text);
  }

  static init() {
    return accessibilityService.init();
  }
}
