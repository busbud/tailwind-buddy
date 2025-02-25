---
title: Tailwind Autocomplete in VSCode (Optional)
editLink: true
---

# Tailwind Autocomplete in VSCode (Optional)

For Tailwind class autocomplete in VSCode, add the following to your `.vscode/settings.json`:

```json
{
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "css.validate": false,
  "editor.inlineSuggest.enabled": true,
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    ".*Styles.",
    ".*Classes."
  ],
  "tailwindCSS.experimental.classRegex": ["@tw\\s\\*/\\s+[\"'`]([^\"'`]*)"]
}
```

With this setup, you can use `/** @tw */` before your Tailwind classes to enable autocompletion.
