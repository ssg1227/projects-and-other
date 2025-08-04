# 1. Scope of Work

We will develop an **ERP umbrella app** for *Waterworld Cruise Lines* with modular architecture and a functional UI, including mock login and an extensible module menu.

---

## Key Deliverables:

### **ERP Dashboard (Umbrella)**
- Fully functional app shell with mock login.
- Menu-driven access to modules.

---

### **Dynamic Module Loader**
- Easy addition of new modules without rewriting the core app.

---

### **Initial Modules**

#### **Functional Module**
- **Passenger Dining Predictor (GALLEY: Guest Appetite Logistics & Less Excess Yield)**  
  - Partial development, AI-ready architecture.

#### **Placeholder Modules (partial UI/limited data)**
- **Fleet**: Card-based ship listing UI (for future drill-down to cabin allocation).
- **Sales**: Hard-coded data dashboard (future live integration).

---

### **Grayed-Out Future Modules**
- **Inventory & Waste Minimization** (linked to GALLEY).  
- **Cabin Allocation** (linked to Fleet drill-down).  
- **Booking Trends Analyzer**.
# 2. SDLC Plan

## A. High-Level Statement
"Build a modular ERP dashboard for Waterworld Cruise Lines with an extensible UI, mock login, and initial core modules (GALLEY, Fleet, Sales) to form the foundation for future AI-driven neural network integration."

---

## B. Requirements

### Functional Requirements:

#### ERP Dashboard:
- Login page with mock authentication.
- Sidebar/menu for module navigation.
- Main content area loads selected module dynamically.

#### Module Loader:
- Fetch modules from a JSON manifest (easy addition).
- Show active (clickable) vs inactive (grayed-out) modules.

#### Modules:

**GALLEY (Dining Predictor):**
- Placeholder UI with passenger meal prediction inputs.
- Static mock output for now (later: TensorFlow.js model).

**Fleet:**
- Display a card grid of ships with images and basic info.
- Future: drill down into cabin allocation per ship.

**Sales:**
- Static dashboard with bar/line charts for mock revenue data.

#### Grayed-Out Modules:
- Show future placeholders in menu as disabled links.

---

### Non-Functional Requirements:
- Responsive design (desktop/tablet friendly).
- Modular code structure using ES6 modules.
- Persistent login state (mock) with `localStorage`.
- Clear API contract for future AI module integration.

---

## C. Design (Tech + Non-Tech)

### UI Layout:
