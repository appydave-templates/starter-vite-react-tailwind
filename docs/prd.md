## MVP Template (React + Tailwind) - Product Requirements Document (PRD)

### Goals and Background Context

#### Goals

* **Increase Development Velocity**: Drastically reduce the time and friction required to start new application projects.
* **Create a Sustainable Foundation**: Build a high-quality, reusable asset that compounds in value through a simplified, semi-automated update process.

#### Background Context

This project addresses the significant bottleneck in the initial phase of development. The "Template Tax"—amounting to over four hours of manual setup, wasted AI credits, and quality issues from "AI drift"—is a direct impediment to high-velocity creation. This template aims to solve this by creating an AI-first foundation that is both efficient to use and easy to maintain.

---

### Change Log

| Date          | Version | Description                          | Author    |
| ------------- | ------- | ------------------------------------ | --------- |
| June 25, 2025 | 1.0     | Initial draft based on Project Brief | John (PM) |

---

### Requirements

#### Functional Requirements

* **FR1**: The template must provide a pre-configured, runnable project utilizing React, Vite, TailwindCSS, and the ShadCN UI library.
* **FR2**: The template must include a minimal, working example page that demonstrates core capabilities, including a functional dark/light mode toggle and the use of custom color swatches.
* **FR3**: The template must contain a root-level `template.ai.json` manifest file that programmatically describes the template's stack, purpose, and architectural rules.
* **FR4**: The template must include an executable npm script (`npm run check-evolution`) that analyzes the project's dependencies and identifies outdated packages.
* **FR5**: The template must be configured to support environment variables for secure configuration management via a `.env` file.

#### Non-Functional Requirements

* **NFR1**: The total time required for a developer to clone the repository and get the example page running locally must be under 15 minutes.
* **NFR2**: The template's build output must be compatible with deployment on common static hosting platforms (e.g., Vercel, Netlify).
* **NFR3**: The template's configuration must follow security best practices, ensuring no sensitive keys or environment variables are exposed in the client-side build.

---

### User Interface Design Goals

#### Overall UX Vision

The example page should have a clean, minimalist aesthetic. Its purpose is purely functional: to provide immediate visual confirmation that the template is working correctly and to demonstrate its core features (styling, dark/light mode) without being distracting.

#### Key Interaction Paradigms

* A single, clear toggle or button to switch between dark and light modes.

#### Core Screens and Views

* **Example Page**: A single, non-scrollable page that serves as the default view when the development server is started.

#### Accessibility

* The example page should meet WCAG 2.1 Level AA compliance.

#### Branding

* No branding; a neutral color palette should be used that is easily customizable.

#### Target Device and Platforms

* Web (Desktop-first, but responsive).

---

### Technical Assumptions

#### Repository Structure

* Standard single repository for a standalone frontend application.

#### Service Architecture

* Not applicable (frontend only).

#### Testing Requirements

* Unit tests for non-trivial logic (e.g., theme provider) using Jest and React Testing Library.

---

### Epics

#### Epic 1: MVP Template Foundation

Deliver the complete, runnable V1 React+Tailwind starter template, featuring the working example page, AI manifest, and the initial evolution-check script.

##### Story 1.1: Project Scaffolding

**As an AI-Augmented Developer**, I want to initialize a new project with Vite and React so that I have the basic application structure.

**Acceptance Criteria:**

* Project created using `npm create vite@latest`
* Dependencies for React, TailwindCSS, and ShadCN installed
* Basic `src` and `public` directory structure in place
* `npm run dev` starts the development server showing a blank page

##### Story 1.2: Core Configuration

**As an AI-Augmented Developer**, I want pre-configured setup for linting, styling, and environment variables.

**Acceptance Criteria:**

* `.eslintrc.js` with baseline rules for React/TypeScript
* `tailwind.config.js` targeting the correct file structure
* `.env.example` provided and supported in `vite.config.ts`

##### Story 1.3: Example Page Implementation

**As a Vibe Coder**, I want to see a working example page on startup.

**Acceptance Criteria:**

* Default page displays "Hello World"-style message
* Toggle or button for switching between light/dark themes
* Demonstrates at least one custom Tailwind color
* Basic unit test for theme toggle logic

##### Story 1.4: AI Manifest Creation

**As an AI Agent**, I need a `template.ai.json` file to understand the project’s architecture.

**Acceptance Criteria:**

* `template.ai.json` exists at project root
* Valid JSON with keys: purpose, stack, features, architectural\_rules
* Content matches V1 state of the project

##### Story 1.5: Evolution Script (V1)

**As an AI-Augmented Developer**, I want a script to check outdated packages.

**Acceptance Criteria:**

* `check-evolution` script added to `package.json`
* `npm run check-evolution` runs `npm-check-updates`
* Outputs a human-readable report in the console

---

### Checklist Results Report

To be completed after PRD approval and execution of the `pm-checklist`.

---

### Next Steps

#### Architect Prompt

This PRD defines the requirements for the MVP Template. The next step is to create a detailed Architecture document that specifies:

* File contents for Vite, Tailwind, ESLint configs
* Final `template.ai.json` schema
* Implementation patterns for example page and evolution script
