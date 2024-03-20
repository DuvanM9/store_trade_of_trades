export interface IProduct {
  title: string;
  description: string;
  price: number;
  shipping_price: number;
  img: string;
}


export interface IProductUpdated {
    title?: string;
    description?: string;
    price?: number;
    shipping_price?: number;
    img?: string;
}
  