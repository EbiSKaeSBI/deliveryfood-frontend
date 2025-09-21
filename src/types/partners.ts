export type Partner = {
  name: string;
  timeOfDelivery: number;
  stars: number;
  minPrice: number;
  kitchen: string;
  image: string;
  products?: Product[];
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  partnerId: string;
}
