export interface IProduct {
  title: string;
  description: string;
  price: number;
  shipping_price: number;
  img: string;
  ID: string;
  tags: string[];
  discount?: number;
  apply_discount?: boolean;
}

export interface IPropsCard extends IProduct {
  actionCard: (product: IProduct) => void;
}

export interface IProductUpdated {
  title?: string;
  description?: string;
  price?: number;
  shipping_price?: number;
  img?: string;
}
