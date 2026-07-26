# accessible-css-library
# Accessible UI Component Library 

A lightweight, production-ready collection of accessible UI components built with **vanilla JavaScript**, **semantic HTML5**, and **CSS/SASS (BEM methodology)**. Designed strictly in adherence with **WCAG 2.1 AA Standards**.

## 🚀 Live Demo
[Link to your hosted GitHub Pages / Vercel link here]

## ✨ Features & Accessibility Guarantees

- **WCAG 2.1 Compliant:** Built specifically with screen-reader users and keyboard-only navigation in mind.
- **Strict BEM Naming Conventions:** Clean, scalable, and modular CSS architecture (`.block__element--modifier`).
- **Focus Trap Management:** Programmatically traps focus inside active dialogs so keyboard navigation cannot leak into background elements.
- **Focus Restoration:** Restores the user's focus back to the original trigger element upon closing interactive components.
- **Native Keyboard Shortcuts:** Complete support for `Escape`, `Tab`, `Shift + Tab`, and `Enter`/`Space` actions.

## 🛠️ Built With

* **HTML5** (Semantic elements & ARIA attributes)
* **CSS3 / SASS** (BEM methodology & custom properties)
* **JavaScript (ES6+)** (Zero external dependencies)

## 📦 Components Included

### 1. Accessible Modal Dialog
- **ARIA Attributes:** `role="dialog"`, `aria-hidden`, `aria-labelledby`, `aria-describedby`
- **Behavior:** Traps tab focus inside the modal, listens for `Escape` key close events, and returns focus to the initiating button when closed.

---

## 💻 How to Use Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/a11y-ui-components.git](https://github.com/YOUR_USERNAME/a11y-ui-components.git)
