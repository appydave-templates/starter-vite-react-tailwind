# Data Models

The core data model is the schema for the `template.ai.json` manifest file.

## template.ai.json Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "BMAD AI Template Manifest",
  "description": "A manifest file for describing a project template to an AI agent.",
  "type": "object",
  "required": ["manifestVersion", "template", "purpose", "stack", "features", "rules"],
  "properties": {
    "manifestVersion": {
      "description": "The version of the manifest schema itself.",
      "type": "string",
      "const": "1.0"
    },
    "template": {
      "description": "Information about the template.",
      "type": "object",
      "properties": {
        "name": { "type": "string", "const": "starter-vite-react-tailwind" },
        "version": { "type": "string", "pattern": "^\\d+\\.\\d+\\.\\d+$" }
      },
      "required": ["name", "version"]
    },
    "purpose": {
      "description": "The intended use-case for this template.",
      "type": "string",
      "const": "Rapid prototyping and proof-of-concept builds."
    },
    "stack": {
      "description": "Key technologies used in this template.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "version": { "type": "string" },
          "category": { "type": "string" }
        },
        "required": ["name", "version", "category"]
      }
    },
    "features": {
      "description": "A list of built-in features and capabilities.",
      "type": "array",
      "items": { "type": "string" }
    },
    "rules": {
      "description": "Core architectural or style rules for the AI to follow.",
      "type": "array",
      "items": { "type": "string" }
    }
  }
}
```
