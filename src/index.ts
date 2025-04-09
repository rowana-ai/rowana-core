export function generateJsonLd(data: unknown): string {
  console.log('Rowana core function called with:', data);
  // Placeholder implementation
  // Note: Depending on how 'data' is used later, you might need type guards or assertions.
  // For now, JSON.stringify can handle 'unknown'.
  return JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Placeholder" });
}
