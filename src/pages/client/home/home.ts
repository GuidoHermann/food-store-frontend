import { PRODUCTS, getCategories } from '../../../data/data';
import { addToCart } from '../../../utils/cart';
import type { IProduct } from '../../../types/product';

// Referencias a elementos del DOM mediante Type Guards implícitos y Assertions
const searchInput = document.querySelector<HTMLInputElement>('#input-search');
const categoriesContainer = document.querySelector<HTMLDivElement>('#categories-container');
const productsContainer = document.querySelector<HTMLDivElement>('#products-container');

// Estado local para mantener los filtros activos en memoria
let currentSearchTerm = '';
let selectedCategoryId = '';

// 1. Renderizado dinámico del listado de productos
const renderProducts = (products: IProduct[]): void => {
  if (!productsContainer) return;

  if (products.length === 0) {
    productsContainer.innerHTML = '<p>No se encontraron productos coincidentes.</p>';
    return;
  }

  productsContainer.innerHTML = products.map((product) => `
    <div class="product-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
      <h3>${product.nombre}</h3>
      <p>${product.descripcion || ''}</p>
      <p><strong>Precio:</strong> $${product.precio}</p>
      <button data-id="${product.id}" class="btn-add-cart">Agregar al carrito</button>
    </div>
  `).join('');

  // Asignación de eventos dinámicos a cada botón "Agregar" (HU-P1-03)
  const addButtons = productsContainer.querySelectorAll<HTMLButtonElement>('.btn-add-cart');
  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      const targetProduct = PRODUCTS.find((p) => p.id === productId);
      if (targetProduct) {
        addToCart(targetProduct);
        alert(`¡${targetProduct.nombre} agregado al carrito!`);
      }
    });
  });
};

// 2. Aplicación combinada de filtros (Búsqueda por texto y Categoría)
const applyFilters = (): void => {
  let filtered = PRODUCTS;

  // Filtrado por categoría seleccionada (HU-P1-02)
  if (selectedCategoryId) {
    filtered = filtered.filter((p) => p.categoriaId === selectedCategoryId);
  }

  // Filtrado por coincidencia de texto en el nombre (HU-P1-01)
  if (currentSearchTerm.trim() !== '') {
    filtered = filtered.filter((p) =>
      p.nombre.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
  }

  renderProducts(filtered);
};

// 3. Renderizado de las opciones de categorías (HU-P1-02)
const renderCategories = (): void => {
  if (!categoriesContainer) return;

  const categories = getCategories();
  
  // Botón para limpiar filtro y ver todos los productos
  let html = `<button id="btn-cat-all" style="display: block; margin-bottom: 5px;">Todas las categorías</button>`;
  
  html += categories.map((cat) => `
    <button data-cat-id="${cat.id}" class="btn-category" style="display: block; margin-bottom: 5px;">
      ${cat.nombre}
    </button>
  `).join('');

  categoriesContainer.innerHTML = html;

  // Evento para ver catálogo completo
  document.querySelector('#btn-cat-all')?.addEventListener('click', () => {
    selectedCategoryId = '';
    applyFilters();
  });

  // Eventos para filtrar por categoría específica
  const catButtons = categoriesContainer.querySelectorAll<HTMLButtonElement>('.btn-category');
  catButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedCategoryId = btn.getAttribute('data-cat-id') || '';
      applyFilters();
    });
  });
};

// 4. Inicialización y escuchadores de eventos
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts(PRODUCTS);

  // Escuchar entrada de texto para búsqueda dinámica (HU-P1-01)
  searchInput?.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    currentSearchTerm = target.value;
    applyFilters();
  });
});