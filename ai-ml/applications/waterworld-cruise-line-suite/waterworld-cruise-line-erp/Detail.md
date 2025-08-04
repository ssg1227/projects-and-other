


### Module Loader Design:

**JSON manifest example:**
```json
[
  { "name": "GALLEY", "path": "./modules/galley.js", "active": true },
  { "name": "Fleet", "path": "./modules/fleet.js", "active": true },
  { "name": "Sales", "path": "./modules/sales.js", "active": true },
  { "name": "Inventory", "path": "", "active": false },
  { "name": "Cabin Allocation", "path": "", "active": false }
]
```
### Workflow (End-to-End):
Login (mock) → ERP Dashboard → Select Module → Module Loads Dynamically → Placeholder or Functional Output

## Module Details (Phase 1-3):

### GALLEY:
- Form UI: Inputs for passenger count, demographics, itinerary.
- Output UI: Mock table/chart for predicted meals.
- AI Placeholder: Stub for TensorFlow.js model integration.

### Fleet:
- Card view: Ship images + name + capacity.
- Placeholder click: "Cabin allocation coming soon."

### Sales:
- Hard-coded charts (revenue by ship, occupancy rate).

### Grayed-out Modules:
- Shown but disabled, with tooltip "Coming soon."

---

## D. Technology

### Frontend:
- HTML, CSS (Bootstrap 5 for responsive grid & cards).
- JavaScript (ES6 modules, dynamic imports).
- Chart.js (for sales dashboard).
- IndexedDB/LocalStorage (mock session handling).

### Backend (Stub for now):
- None initially (all frontend simulation).
- Node.js/Express server later for API endpoints.

### AI Integration (Future):
- TensorFlow.js browser-based inference for GALLEY.
- Modular training endpoint via Node.js when backend is added.

### Hosting:
- Firebase Hosting (static deployment).
- Version control via GitHub.

---

## 3. Development Phasing
- **Phase 1:** ERP Dashboard shell + login + dynamic module loader.
- **Phase 2:** Initial functional modules (GALLEY UI + Fleet + Sales).
- **Phase 3:** AI wiring in GALLEY, Fleet drill-down (Cabin allocation), Inventory module.
