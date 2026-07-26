const openModalBtn = document.getElementById('open-modal-btn');
const modal = document.getElementById('demo-modal');
const closeElements = document.querySelectorAll('[data-close]');
let previouslyFocusedElement;

// Open Modal
function openModal() {
  previouslyFocusedElement = document.activeElement; // Remember focused item before open
  modal.setAttribute('aria-hidden', 'false');
  
  // Find all focusable elements inside modal
  const focusableElements = getFocusableElements(modal);
  if (focusableElements.length > 0) {
    focusableElements[0].focus(); // Move focus into modal
  }

  document.addEventListener('keydown', handleKeyDown);
}

// Close Modal
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', handleKeyDown);
  
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus(); // Restore original focus
  }
}

// Trap Focus inside Modal (WCAG Requirement) & Handle Escape Key
function handleKeyDown(e) {
  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  if (e.key === 'Tab') {
    const focusables = getFocusableElements(modal);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  }
}

// Helper: Get Focusable Items
function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
  );
}

// Event Listeners
openModalBtn.addEventListener('click', openModal);
closeElements.forEach(el => el.addEventListener('click', closeModal));