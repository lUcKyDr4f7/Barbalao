import {Products} from './Products';
import { Products1 } from './Products1';


export const AllProducts = [
  ...Products,
  ...Products1.map((p, index) => ({ ...p, id: Products.length + index }))
];