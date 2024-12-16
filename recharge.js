import { getCurrentUser } from '../modules/auth.js';
import { navigateTo } from '../modules/router.js';

const RECHARGE_PLANS = [
  { id: 1, amount: 199, validity: '28 days', data: '1.5GB/day', description: 'Unlimited calls & SMS' },
  { id: 2, amount: 299, validity: '84 days', data: '2GB/day', description: 'Unlimited calls & SMS' },
  { id: 3, amount: 499, validity: '56 days', data: '3GB/day', description: 'Unlimited calls & SMS' }
];

export function renderRechargePage(container) {
  container.innerHTML = `
    <div>
      <h2>Select Recharge Plan</h2>
      <div class="recharge-form">
        <div class="form-group">
          <label for="mobile">Mobile Number</label>
          <input type="tel" id="mobile" class="form-control" pattern="[0-9]{10}" required>
        </div>
        
        <div class="plans-container">
          ${RECHARGE_PLANS.map(plan => `
            <div class="plan-card">
              <h3>₹${plan.amount}</h3>
              <div class="plan-details">
                <p>Validity: ${plan.validity}</p>
                <p>Data: ${plan.data}</p>
                <p>${plan.description}</p>
              </div>
              <button class="btn" onclick="window.handleRecharge(${plan.id})">Select Plan</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Add global handler for recharge
  window.handleRecharge = (planId) => {
    const mobileNumber = document.getElementById('mobile').value;
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    const plan = RECHARGE_PLANS.find(p => p.id === planId);
    const user = getCurrentUser();
    
    if (user.balance < plan.amount) {
      alert('Insufficient balance');
      return;
    }

    // Simulate recharge process
    alert(`Recharge successful!\nMobile: ${mobileNumber}\nAmount: ₹${plan.amount}`);
    navigateTo('/history');
  };
}