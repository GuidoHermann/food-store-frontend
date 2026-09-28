export interface IProduct {
  id: string;
  nombre: string;
  precio: number;
  categoriaId: string;
  imagen?: string;
  descripcion?: string;

}

export interface ICartItem {
  product: IProduct;
  cantidad: number;
}