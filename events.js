import { navigateTo } from './router.js';

export function setupEventListeners() {
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.getAttribute('href'));
    }
  });
}