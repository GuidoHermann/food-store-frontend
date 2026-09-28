import { getUsers, setUserData } from '../../../utils/auth';
import { navigateTo } from '../../../utils/navigate';

const form = document.querySelector<HTMLFormElement>('#loginForm')!;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const email = document.querySelector<HTMLInputElement>('#email')!.value;
  const password = document.querySelector<HTMLInputElement>('#password')!.value;

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Guardamos la sesión omitiendo la clave por seguridad
    const sessionUser = { id: user.id, email: user.email, rol: user.rol };
    setUserData(sessionUser);

    if (user.rol === 'admin') {
      navigateTo('/src/pages/admin/index.html');
    } else {
      navigateTo('/src/pages/client/home/home.html');
    }
  } else {
    alert('Credenciales incorrectas');
  }
});