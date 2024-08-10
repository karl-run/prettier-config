/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: ["*.yml", "*.yaml"],
      options: {
        bracketSpacing: false,
        tabWidth: 2,
      },
    },
  ],
};

export default config;
