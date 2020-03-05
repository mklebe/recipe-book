/* tslint:disable */
import { Ingredient } from './ingredient';
export interface Recipe {
  hits: number;
  id: number;
  image: string;
  ingredients: Array<Ingredient>;
  name: string;
  slug: string;
}
