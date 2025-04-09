# @rowana-ai/rowana-core

Core package for Rowana GEO - Automates Schema.org JSON-LD generation during build time.

## Installation

Install the package using npm:

```bash
npm install @rowana/rowana-core
```

Or using yarn:

```bash
yarn add @rowana/rowana-core
```

## Usage

Import the `generateJsonLd` function and use it to create your JSON-LD strings.

```typescript
import { generateJsonLd } from '@rowana/rowana-core';

// Example data (replace with your actual data structure)
const myData = {
  pageTitle: "My Awesome Page",
  description: "This page is truly awesome."
};

const jsonLdString = generateJsonLd(myData);

console.log(jsonLdString);
// Output (currently placeholder): {"@context":"https://schema.org","@type":"WebPage","name":"Placeholder"}

// You can then inject this string into a <script type="application/ld+json"> tag in your HTML.
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

stay tuned :)
