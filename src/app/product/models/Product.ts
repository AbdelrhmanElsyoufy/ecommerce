import { Category } from "./Category";
import { Offer } from "./offer";

export interface Product {
  id: number;
  title: string;
  description: string;
  productCategory: Category;
  offer: Offer;
  price: number;
  quantity: number;
  imageName: string;
}
