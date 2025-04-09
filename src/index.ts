export function generateJsonLd(data: any): string {
  console.log('Rowana core function called with:', data);
  // Placeholder implementation
  return JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Placeholder" });
}

console.log('Rowana Core Package Loaded (Dev)');
