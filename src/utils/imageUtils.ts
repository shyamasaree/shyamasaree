export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = '/placeholder-saree.svg';
  e.currentTarget.onerror = null; // Prevent infinite loop
};

export const getOptimizedImageUrl = (url: string): string => {
  // If Unsplash URL, ensure it has proper parameters
  if (url.includes('unsplash.com')) {
    const hasParams = url.includes('?');
    const params = hasParams ? '&' : '?';
    return `${url}${params}auto=format&fit=crop&q=80`;
  }
  return url;
};
