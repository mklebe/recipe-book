/* tslint:disable */
import { Diet } from './diet';
import { Season } from './season';
export interface Ingredient {
  description: string;
  diets: Array<Diet>;
  hits: number;
  name: string;
  seasons: Array<Season>;
}
