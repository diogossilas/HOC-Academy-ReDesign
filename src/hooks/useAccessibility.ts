import { useState, useEffect } from 'react';
import { accessibilityService } from '../services/accessibility.service';

export function useAccessibility() {
  const [isEnabled, setIsEnabled] = useState(accessibilityService.enabled);

  useEffect(() => {
    const unsubscribe = accessibilityService.subscribe((enabled) => {
      setIsEnabled(enabled);
    });
    return unsubscribe;
  }, []);

  const toggle = () => {
    return accessibilityService.toggle();
  };

  const speak = (text: string) => {
    accessibilityService.speak(text);
  };

  return {
    isEnabled,
    toggle,
    speak,
  };
}
