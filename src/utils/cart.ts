import type { ICartItem, IProduct } from '../types/product';

const CART_STORAGE_KEY = 'cart';

// 1. Obtiene los elementos guardados en localStorage o un array vacío si no hay nada
export const getCartItems = (): ICartItem[] => {
  const data = localStorage.getItem(CART_STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as ICartItem[];
  } catch (error) {
    console.error('Error al parsear el carrito desde localStorage', error);
    return [];
  }
};

// 2. Guarda el estado actualizado del carrito en localStorage
export const saveCartItems = (items: ICartItem[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

// 3. Agrega un producto al carrito o incrementa su cantidad si ya existe
export const addToCart = (product: IProduct): void => {
  const currentItems = getCartItems();
  const existingItemIndex = currentItems.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingItemIndex !== -1) {
    // Si el producto ya está en el carrito, se suma 1 a la cantidad existente
    currentItems[existingItemIndex].cantidad += 1;
  } else {
    // Si no existe, se agrega como un nuevo item con cantidad 1
    currentItems.push({ product, cantidad: 1 });
  }

  saveCartItems(currentItems);
};

// 4. Calcula y retorna el monto total acumulado de la compra
export const getCartTotal = (): number => {
  const items = getCartItems();
  return items.reduce((total, item) => total + item.product.precio * item.cantidad, 0);
};

// 5. Vacía completamente el carrito en localStorage
export const clearCart = (): void => {
  localStorage.removeItem(CART_STORAGE_KEY);
};