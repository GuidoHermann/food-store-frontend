import { Rol } from '../../../types/Rol';
import type { IUser } from '../../../types/IUser';
import { registerUserInStorage } from '../../../utils/auth';
import { navigateTo } from '../../../utils/navigate';

const form = document.querySelector<HTMLFormElement>('#registroForm')!;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const emailInput = document.querySelector<HTMLInputElement>('#email')!;
  const passwordInput = document.querySelector<HTMLInputElement>('#password')!;

  const newUser: IUser = {
    id: Date.now().toString(),
    email: emailInput.value,
    password: passwordInput.value,
    rol: Rol.CLIENT // Por defecto asignamos rol client
  };

  const exito = registerUserInStorage(newUser);

  if (exito) {
    alert('Usuario registrado exitosamente');
    navigateTo('/src/pages/auth/login/login.html');
  } else {
    alert('El email ya se encuentra registrado');
  }
});