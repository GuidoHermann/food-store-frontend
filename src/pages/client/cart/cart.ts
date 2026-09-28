import { getCartItems, getCartTotal, clearCart } from '../../../utils/cart';

// Referencias seguras al DOM
const itemsContainer = document.querySelector<HTMLDivElement>('#cart-items-container');
const totalAmountSpan = document.querySelector<HTMLSpanElement>('#cart-total-amount');
const clearCartBtn = document.querySelector<HTMLButtonElement>('#btn-clear-cart');

// 1. Renderizado de los productos almacenados en localStorage (HU-P1-04)
const renderCart = (): void => {
  if (!itemsContainer || !totalAmountSpan) return;

  const items = getCartItems();

  // Si el carrito está vacío, mostramos el mensaje informativo exigido
  if (items.length === 0) {
    itemsContainer.innerHTML = '<p>El carrito está vacío. Agrega productos desde el catálogo.</p>';
    totalAmountSpan.textContent = '0';
    return;
  }

  // Si hay ítems, renderizamos nombre, precio individual, cantidad y subtotal por producto
  itemsContainer.innerHTML = items.map((item) => {
    const subtotal = item.product.precio * item.cantidad;
    return `
      <div class="cart-item" style="border-bottom: 1px solid #ddd; padding: 10px 0;">
        <h4>${item.product.nombre}</h4>
        <p>Precio unitario: $${item.product.precio}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <p><strong>Subtotal: $${subtotal}</strong></p>
      </div>
    `;
  }).join('');

  // 2. Actualización del Total General (HU-P1-05)
  const total = getCartTotal();
  totalAmountSpan.textContent = total.toString();
};

// 3. Inicialización de eventos y carga de datos
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  // Escuchador para vaciar el carrito
  clearCartBtn?.addEventListener('click', () => {
    if (getCartItems().length === 0) return;
    
    clearCart();
    renderCart();
  });
});