export type Partner = {
  id: string;
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


export type PartnersResponse = {
  partners: Partner[];
  pagination: {
    currentPage: number | string;
    totalPage: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number | null;
    previousPage: number | null;
  }
}
