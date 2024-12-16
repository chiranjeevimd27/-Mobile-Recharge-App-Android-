// Simulated user data (in a real app, this would come from a backend)
const MOCK_USER = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  balance: 500
};

export function initializeAuth() {
  // Check if user is logged in
  const user = getCurrentUser();
  updateUserInfo(user);
}

export function getCurrentUser() {
  // In a real app, this would check session/token
  return MOCK_USER;
}

export function updateUserInfo(user) {
  const userInfoElement = document.getElementById('userInfo');
  if (user) {
    userInfoElement.innerHTML = `
      <div>
        <span>${user.name}</span>
        <span>Balance: ₹${user.balance}</span>
      </div>
    `;
  }
}