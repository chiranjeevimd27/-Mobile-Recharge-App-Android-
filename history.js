import { format } from 'date-fns';

// Simulated transaction history
const MOCK_TRANSACTIONS = [
  { id: 1, date: new Date('2023-08-15'), amount: 199, mobile: '9876543210' },
  { id: 2, date: new Date('2023-08-10'), amount: 299, mobile: '9876543210' },
  { id: 3, date: new Date('2023-07-25'), amount: 499, mobile: '9876543210' }
];

export function renderHistoryPage(container) {
  container.innerHTML = `
    <div>
      <h2>Recharge History</h2>
      <ul class="transaction-list">
        ${MOCK_TRANSACTIONS.map(transaction => `
          <li class="transaction-item">
            <div>
              <strong>₹${transaction.amount}</strong>
              <div class="transaction-details">
                <span>Mobile: ${transaction.mobile}</span>
                <span>Date: ${format(transaction.date, 'PP')}</span>
              </div>
            </div>
          </li>
        `).join('')}
      </ul>
      <button class="btn" style="margin-top: 1rem;" onclick="window.location.href='/'">Back to Home</button>
    </div>
  `;
}