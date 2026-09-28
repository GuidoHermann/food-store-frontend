import { getUserData, logout } from '../../utils/auth';
import { navigateTo } from '../../utils/navigate';

// Protección directa de vista
const user = getUserData();
if (!user) {
  navigateTo('/src/pages/auth/login/login.html');
}

const logoutBtn = document.querySelector<HTMLButtonElement>('#logoutBtn');
logoutBtn?.addEventListener('click', () => {
  logout();
  navigateTo('/src/pages/auth/login/login.html');
});