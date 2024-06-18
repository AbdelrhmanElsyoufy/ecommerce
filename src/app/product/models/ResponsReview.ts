import { ResponsUser } from "src/app/auth/auth/models/ResponsUser";
import { User } from "src/app/auth/auth/models/User";
import { Product } from "./Product";

export interface ResponsReview {
  id : number;
  user : ResponsUser;
  product : Product;
  createdAt : string;
  value : string
  userId : number;
  productId : number;
}
