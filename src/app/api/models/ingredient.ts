/* tslint:disable */
import { Diet } from './diet';
import { Season } from './season';
export interface Ingredient {
  description: string;
  diets: Array<Diet>;
  hits: number;
  id: number;
  image: string;
  name: string;
  seasons: Array<Season>;
  slug: string;
}
