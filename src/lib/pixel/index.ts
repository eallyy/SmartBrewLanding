export const usePixel = () => {
  const track = (event: string, data: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', event, data);
    } else {
      console.warn('Facebook Pixel not initialized.');
    }
  };

  return { track };
};

