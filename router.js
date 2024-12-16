import { renderHomePage } from '../pages/home.js';
import { renderRechargePage } from '../pages/recharge.js';
import { renderHistoryPage } from '../pages/history.js';

const routes = {
  '/': renderHomePage,
  '/recharge': renderRechargePage,
  '/history': renderHistoryPage
};

export function initializeRouter() {
  // Handle initial route
  handleRoute(window.location.pathname);

  // Handle navigation
  window.addEventListener('popstate', () => {
    handleRoute(window.location.pathname);
  });
}

export function navigateTo(path) {
  window.history.pushState({}, '', path);
  handleRoute(path);
}

function handleRoute(path) {
  const render = routes[path] || routes['/'];
  const mainContent = document.getElementById('mainContent');
  render(mainContent);
}