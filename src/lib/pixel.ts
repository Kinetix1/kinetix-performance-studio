declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function pixelLead() {
  window.fbq?.("track", "Lead");
}
