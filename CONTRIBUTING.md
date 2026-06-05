# Contributing to the D4 Community Website

Hey! Thanks for stopping by. Whether you are fixing a small layout glitch, patching an annoying bug, or building out a brand-new feature, your help makes the D4 Community platform better for thousands of developers in the ecosystem.

Before diving in, please take a quick look at our [Code of Conduct](CODE_OF_CONDUCT.md). Let's keep this space welcoming, supportive, and respectful for everyone.

---

## 🛠️ Our Tech Stack

Here is a quick look at what we are using to build the site:
* **Framework:** Next.js (App Router) with TypeScript
* **Package Manager:** npm (`package-lock.json` is our source of truth, please do not use yarn or bun here)
* **Styling & UI:** Tailwind CSS & Shadcn UI (`components.json`)
* **Content:** Sanity CMS

---

## 📂 Project Structure Guide

To help you find your way around the codebase quickly, here is a breakdown of how the folders are organized inside `src/`:

* `src/app/`: Handles all of our routing and page layouts. If you need to edit metadata, canonical tags, or wire up SEO components like `OrgSchema`, you will find those entry points here.
* `src/features/`: This is where the core UI components (`.tsx`) and feature logic live (e.g., `/features/home`, `/features/events`, `/features/gallery`). Instead of cluttering the `app/` folder, we build the page sections here and import them into the router.
* `src/components/`: Global, reusable UI components (`.tsx`) like buttons, inputs, navbar, and footer elements.
* `src/schema/` or `src/app/schema/`: Houses our structured JSON-LD data scripts (like `OrgSchema`) that keep our search engine rankings high.

---

## 🚀 Step-by-Step Setup

### 1. Find or Open an Issue
* Browse our open issues to see what needs work. If you find something you want to tackle, drop a comment asking to be assigned.
* Found a bug or have a cool feature idea that isn't listed? Open a new issue first so we can chat about it.
* Please wait until a maintainer assigns the issue to you before you start writing code.

### 2. Setup Your Local Environment
1. **Fork this repository** to your own GitHub account.
2. **Clone your fork** to your local machine:
```bash
   git clone [https://github.com/YOUR-USERNAME/d4-website-revamped.git](https://github.com/YOUR-USERNAME/d4-website-revamped.git)
   cd d4-website-revamped
   ```
3. **Set up Environment Variables:** If the project requires connection strings or API keys, look for a `.env.example` file in the root. Duplicate it, rename it to `.env.local`, and fill in the placeholders.
4. **Install the dependencies** using npm:
```bash
   npm install
   ```
5. **Create a fresh branch** for your changes. Keep the name simple, clean, and prefixed with the type of work you're doing:
```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-name
   ```
6. **Fire up the local development server**:
```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to see your changes live.

---

## 🎨 Coding & Quality Guidelines

### TypeScript & Code Style
* **No `any` Types:** Write clean, type-safe code. Try your absolute best to explicitly declare your types and interfaces.
* **Component Patterns:** Keep your UI components small and modular. Always use `.tsx` files for components and extract large chunks of TSX markup into smaller, manageable sub-components.

### Linting & Formatting
Make sure your code passes our linter rules before you commit. It saves a lot of time during automated CI/CD checks:
```bash
npm run lint
```

### 🔍 Strict SEO Guidelines
If you are touching subpages or metadata configurations within `app/`, pay close attention to the `metadata` object:
* **Front-load Keywords:** Keep titles descriptive and place the core search terms at the beginning (e.g., `D4 Community Events | ...` instead of `Events | D4 Community`).
* **Description Window:** Ensure page descriptions are human-written, conversational, and fit strictly inside the **50–55 character** range. 
* **Canonical Anchors:** Always verify that the `canonical` URL points directly to the verified `www` domain string (`https://www.d4community.com/your-page`).

---

## 📤 Sending a Pull Request (PR)

1. **Commit Messages:** Use clear, straight-to-the-point commit messages. (Bonus points if you use conventional commit style, e.g., `feat: added gallery filters` or `fix: patched broken layout link`).
2. **Sync with Master:** Before pushing, ensure your local branch is up to date with the upstream `master` branch to avoid messy merge conflicts:
```bash
   git checkout master
   git pull origin master
   git checkout your-branch-name
   git merge master
   ```
3. **Push your branch** to your GitHub fork:
```bash
   git push origin feature/your-feature-name
   ```
4. Head over to the main [D4Community/d4-website-revamped](https://github.com/D4Community/d4-website-revamped) repository and click **New Pull Request**.
5. **Fill out the PR Template:** Describe your changes clearly, attach screenshots of visual updates if applicable, and make sure to link the issue it fixes (e.g., `Closes #12`).

---

## 💬 Stuck or Have Questions?
Don't sweat it if you run into setup issues or get confused by the codebase. Drop a comment right on the issue thread or give us a shout in our community channels. We are more than happy to help you get your code across the finish line! Happy coding! 🚀
