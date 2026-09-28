import type { IUser } from '../types/IUser';

const USER_DATA_KEY = 'userData';
const USERS_LIST_KEY = 'users';

// Obtener sesión activa de forma segura
export const getUserData = (): IUser | null => {
  const data = localStorage.getItem(USER_DATA_KEY);
  if (!data) return null;

  try {
    return JSON.parse(data) as IUser;
  } catch (error) {
    console.error('Error al parsear la sesión activa. Se limpiará el estado.', error);
    localStorage.removeItem(USER_DATA_KEY);
    return null;
  }
};

// Guardar sesión activa
export const setUserData = (user: IUser): void => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
};

// Cerrar sesión
export const logout = (): void => {
  localStorage.removeItem(USER_DATA_KEY);
};

// Obtener todos los usuarios registrados con manejo de errores
export const getUsers = (): IUser[] => {
  const users = localStorage.getItem(USERS_LIST_KEY);
  if (!users) return [];

  try {
    return JSON.parse(users) as IUser[];
  } catch (error) {
    console.error('Error al parsear la lista de usuarios. Se reiniciará el registro de usuarios.', error);
    localStorage.removeItem(USERS_LIST_KEY);
    return [];
  }
};

// Guardar un nuevo usuario en la lista
export const registerUserInStorage = (newUser: IUser): boolean => {
  const users = getUsers();
  const exists = users.some((u) => u.email === newUser.email);
  if (exists) return false;

  users.push(newUser);
  localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));
  return true;
};