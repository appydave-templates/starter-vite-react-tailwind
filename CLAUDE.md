# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **BMAD (Business Model and Architecture Development) template repository** for creating Vite React Tailwind projects. It's not a working web application but rather a collection of AI agent configurations, workflows, and templates that guide the creation of such projects.

## Repository Structure

- `.bmad-core/` - Core BMAD framework configuration and resources
  - `agents/` - AI agent persona definitions (analyst, architect, pm, po, dev, etc.)
  - `workflows/` - Development workflow definitions (greenfield-ui, brownfield-ui, etc.)
  - `templates/` - Document templates for PRDs, architecture docs, etc.
  - `tasks/` - Specific task definitions for agents
  - `checklists/` - Quality assurance checklists
  - `core-config.yml` - Main configuration file
  - `web-bundles/` - Web-compatible agent bundles
    - `agents/` - Individual agent configurations
    - `teams/` - Team configurations (team-fullstack.txt, etc.)
    - `expansion-packs/` - Specialized extension packs
- `docs/` - Generated project documentation
  - `prd.md` - Product Requirements Document
  - `architecture.md` - Frontend Architecture Document (original, sharded in architecture/)
  - `architecture/` - Detailed architecture documentation
    - `index.md` - Architecture documentation index
    - `introduction.md` - Project introduction and overview
    - `high-level-architecture.md` - System architecture overview
    - `tech-stack.md` - Technology stack details
    - `source-tree.md` - Project structure and organization
    - `data-models.md` - Data structures and models
    - `architectural-and-design-patterns.md` - Design patterns and conventions
    - `coding-standards-file-contents.md` - Coding standards and examples
    - `starter-template-or-existing-project.md` - Template usage guidance
    - `change-log.md` - Architecture change history
    - `next-steps.md` - Implementation roadmap

## Core Workflows

### Greenfield UI Development
The primary workflow for creating new frontend applications follows these phases:
1. **Analyst** - Creates project brief from requirements
2. **PM** - Develops PRD from project brief
3. **UX Expert** - Creates UI/UX specifications and optionally generates v0 prompts
4. **Architect** - Designs frontend architecture
5. **PO** - Validates all artifacts for consistency

### Key Configuration Files

- `.bmad-core/core-config.yml` - Main configuration defining document locations and settings
- `.bmad-core/install-manifest.yml` - Tracks installed BMAD components (v4.13.0)

## Agent System

This repository contains configurations for specialized AI agents:
- **bmad-orchestrator** - Workflow coordination
- **analyst** - Requirements analysis and project briefs
- **pm** - Product management and PRD creation
- **architect** - Technical architecture design
- **po** - Product owner validation and quality assurance
- **dev** - Development implementation
- **ux-expert** - UI/UX design and specifications

## Usage Pattern

This is a **template repository** that provides the foundation for AI-assisted project creation. The typical usage involves:

1. Using the agent workflows to generate project documentation
2. Following the greenfield-ui workflow for new projects
3. Saving generated artifacts to the `docs/` folder
4. Moving to IDE environment for actual development

## Important Notes

- This repository contains configuration files only - no actual web application code
- The web-bundles contain large (300KB+) agent instruction files
- All workflows are designed to output documentation that guides actual development
- The framework supports both polyrepo and monorepo project structures