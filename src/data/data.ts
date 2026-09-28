import type { IProduct } from '../types/product';
import type { ICategoria } from '../types/categoria';

// 1. Definición del listado estático de categorías disponibles en la app
export const CATEGORIES: ICategoria[] = [
  { id: 'hamburguesas', nombre: 'Hamburguesas' },
  { id: 'pizzas', nombre: 'Pizzas' },
  { id: 'bebidas', nombre: 'Bebidas' },
  { id: 'postres', nombre: 'Postres' }
];

// 2. Catálogo centralizado de productos con sus detalles y precios
export const PRODUCTS: IProduct[] = [
  {
    id: '1',
    nombre: 'Hamburguesa Doble Queso',
    precio: 8500,
    categoriaId: 'hamburguesas',
    descripcion: 'Doble medalla de carne, doble cheddar y salsa especial.'
  },
  {
    id: '2',
    nombre: 'Hamburguesa Bacon Extra',
    precio: 9200,
    categoriaId: 'hamburguesas',
    descripcion: 'Medalla de carne, panceta crocante y cheddar.'
  },
  {
    id: '3',
    nombre: 'Pizza Mozzarella',
    precio: 11000,
    categoriaId: 'pizzas',
    descripcion: 'Salsa de tomate casera, mozzarella y aceitunas.'
  },
  {
    id: '4',
    nombre: 'Pizza Napolitana',
    precio: 12500,
    categoriaId: 'pizzas',
    descripcion: 'Mozzarella, tomate fresco en rodajas, ajo y orégano.'
  },
  {
    id: '5',
    nombre: 'Gaseosa Cola 500ml',
    precio: 2500,
    categoriaId: 'bebidas',
    descripcion: 'Bebida refrescante sin alcohol.'
  },
  {
    id: '6',
    nombre: 'Agua Mineral 500ml',
    precio: 2000,
    categoriaId: 'bebidas',
    descripcion: 'Agua de manantial sin gas.'
  },
  {
    id: '7',
    nombre: 'Helado de Chocolate',
    precio: 4000,
    categoriaId: 'postres',
    descripcion: 'Copa de helado artesanal de chocolate amargo.'
  },
  {
    id: '8',
    nombre: 'Flan Casero con Dulce de Leche',
    precio: 3800,
    categoriaId: 'postres',
    descripcion: 'Flan tradicional acompañado de dulce de leche.'
  }
];

// 3. Función helper requerida para retornar las categorías tipadas
export const getCategories = (): ICategoria[] => {
  return CATEGORIES;
};