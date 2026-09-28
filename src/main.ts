import { getUserData } from './utils/auth';
import { navigateTo } from './utils/navigate';
import { Rol } from './types/Rol';

const checkPermissions = (): void => {
  const user = getUserData();
  const currentPath = window.location.pathname;

  // Si no está autenticado y busca entrar a zona protegida
  if (!user && (currentPath.includes('/admin/') || currentPath.includes('/client/'))) {
    navigateTo('/src/pages/auth/login/login.html');
    return;
  }

  // Si es un cliente e intenta acceder a la ruta de admin
  if (user && user.rol === Rol.CLIENT && currentPath.includes('/admin/')) {
    navigateTo('/src/pages/client/index.html');
    return;
  }

  // Si está en la raíz, redirigir según su estado
  if (currentPath === '/' || currentPath === '/index.html') {
    if (!user) {
      navigateTo('/src/pages/auth/login/login.html');
    } else if (user.rol === Rol.ADMIN) {
      navigateTo('/src/pages/admin/index.html');
    } else {
      navigateTo('/src/pages/client/index.html');
    }
  }
};

checkPermissions();