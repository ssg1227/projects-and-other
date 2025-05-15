# FileDeleteFeAngular
## Changes May 15 2025 onward, useful information, readme, etc
#### About Angular versions
This app is developed in 18.2, so it would be useful to put some documentation of differences between Angular 16 and earlier,  and Angular 17 onward as below :
Log follows below that

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

## ✅ Angular 16 → Angular 17+ Migration Checklist
Here's a **step-by-step checklist** for migrating an **Angular 16 or earlier project to Angular 17+**, especially aligning with the latest **project structure, asset handling**, and **Firebase/static hosting** best practices:

---


### 🔁 1. **Upgrade Angular Version**

* Update Angular CLI & dependencies:

  ```bash
  ng update @angular/cli @angular/core
  ```
* If using standalone APIs or new features, Angular 17+ gives cleaner support.

---

### 🧱 2. **Update Project Structure**

#### 🔹 a. **Switch to Standalone Components (Optional but Recommended)**

* If you want to eliminate `app.module.ts`, convert components like this:

  ```ts
  @Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterModule],
  })
  export class AppComponent {}
  ```

#### 🔹 b. **Move Static Assets to `public/` (Optional)**

* Create a `public/` folder at the project root.
* Move folders like `/assets/data`, `/assets/images` into `public/`.
* Update `angular.json`:

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

### 📸 3. **Update Image/File References**

| Old (Angular 16)                 | New (Angular 17+)               |
| -------------------------------- | ------------------------------- |
| `src="assets/img.jpg"`           | `src="/img.jpg"` (from public/) |
| `fetch('assets/data/data.json')` | `fetch('/data/data.json')`      |

✅ Always test pathing after `ng build`.

---

### 📦 4. **Rebuild & Verify Output**

* Run:

  ```bash
  ng build --configuration production
  ```
* Check `dist/<project-name>/` contains `index.html`, `main.js`, and public assets.

---

### 🚀 5. **Deploy to Firebase Hosting**

#### 🔹 a. Initialize Firebase

```bash
firebase init
```

* Choose **Hosting**
* Select your project
* Set `dist/<project-name>` as the public directory
* Enable rewrite to `index.html`

#### 🔹 b. `firebase.json` (Example)

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

#### 🔹 c. Deploy

```bash
firebase deploy
```

---

## ✅ Optional Improvements

* Migrate routing to `app.routes.ts` instead of `app-routing.module.ts`.
* Use signals (Angular 17+) for reactive state if needed.
* Consider enabling SSR/SSG during `ng new` for performance.

---