import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  // 1. Where to find your exported Figma tokens
  source: ['src/tokens/tokens.json'],
  
  // 2. How to process them
  platforms: {
    css: {
      transformGroup: 'css',
      // 3. Where to save the generated CSS variables
      buildPath: 'src/assets/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();