# FileDeleteFeAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Differences between **Angular 16 and earlier** vs **Angular 17+** 
 (especially focusing on the **build structure, assets handling, and deployment context (like Firebase)**):

---

## ✅ Angular 16 and Earlier vs Angular 17+ – Key Differences (Context: Assets, Public Folder, and Firebase Deployment)

### 1. 📁 Project Structure & Build Outputs

| Feature                      | Angular 16 and Earlier        | Angular 17+                               |
| ---------------------------- | ----------------------------- | ----------------------------------------- |
| Default App Structure        | `src/app`, `src/assets`, etc. | May use `public/` instead of `src/assets` |
| App Module                   | `app.module.ts` (required)    | Optional with Standalone APIs             |
| SSR / Static Site Generation | Manual setup                  | Prompts during `ng new`                   |
| Build Output Directory       | `dist/<project-name>/`        | Same                                      |

---

### 2. 🗂️ `assets/` vs `public/` Folder

#### 🪙 `assets/` Folder (Traditional)

* Located at: `src/assets/`
* Used for: UI assets like images, fonts, JSON files, etc.
* Referenced via: `src="assets/image.jpg"`
* Processed: ✅ Included by Angular build system
* Rebuild required after change: ✅ Yes

#### 🌍 `public/` Folder (New in Angular 17+)

* Located at: Project root (`public/`)
* Used for: Raw static files like large media, PDFs, open-access files
* Referenced via: `src="/file.jpg"` (from site root)
* Processed: ❌ Not touched by Angular (copied as-is)
* Rebuild required after change: ❌ No
* Automatically copied to: `/` of the `dist/` output

🛠️ In `angular.json`, it looks like:

```json
"assets": [
  {
    "glob": "**/*",
    "input": "public",
    "output": "/"
  }
]
```

---

### 3. 🧭 When to Use Which?

| Use Case                                        | Use `assets/`               | Use `public/`                 |
| ----------------------------------------------- | --------------------------- | ----------------------------- |
| Icons, UI images, JSON used in code             | ✅                           |                               |
| Large videos, PDFs, externally linked files     |                             | ✅                             |
| Firebase Hosting – want raw files at root       | ❌ (served under `/assets/`) | ✅ (served at `/`)             |
| Images referenced in CSS via `url(...)`         | ✅                           | ⚠️ Only if paths are absolute |
| Files that don’t need Angular rebuild to update |                             | ✅                             |

---

### 4. 🔥 Firebase Hosting Tips (Angular 17+)

* If using `public/`, Firebase serves files from the **root**, so use paths like:

  ```html
  <img src="/disposal-methods/immerse.jpeg">
  ```

* `firebase.json` should look like:

  ```json
  {
    "hosting": {
      "public": "dist/<project-name>",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        { "source": "**", "destination": "/index.html" }
      ]
    }
  }
  ```

* **Important**: Make sure `index.html` and `/disposal-methods/` exist in your `dist` after build (`ng build`).

---

### ✅ Summary: Key Angular 17+ Changes (Compared to Angular 16)

* Standalone component support (no need for `app.module.ts`)
* Use of `public/` over `assets/` for flat, raw file hosting
* Better alignment with static hosting platforms like Firebase
* Prompts for SSR and SSG during project creation
* Cleaner, more flexible file referencing via root paths (`/image.jpg`)

---
