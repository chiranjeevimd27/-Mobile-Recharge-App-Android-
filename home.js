export function renderHomePage(container) {
  container.innerHTML = `
    <div>
      <h2>Welcome to Mobile Recharge</h2>
      <div class="actions" style="margin-top: 2rem;">
        <a href="/recharge" data-link class="btn">New Recharge</a>
        <a href="/history" data-link class="btn" style="margin-top: 1rem; background-color: transparent; border: 1px solid var(--primary-color); color: var(--primary-color);">View History</a>
      </div>
    </div>
  `;
}