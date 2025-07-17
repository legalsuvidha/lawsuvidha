export {};

declare global {
  interface Window {
    Tawk_API?: {
      hideWidget: () => void;
      showWidget: () => void;
      onLoad?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      // Add other Tawk methods as needed
    };
  }
}
