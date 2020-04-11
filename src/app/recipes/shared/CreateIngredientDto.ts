const DEFAULT_IMAGE_URL = 'https://www.zindel-frucht.de/images/broccoli.jpg'

import {Ingredient, Diet, Season } from 'src/app/api/models'

export class CreateIngredientDto implements Ingredient {
    image: string = DEFAULT_IMAGE_URL
    description: string = ''
    diets: Diet[] = []
    hits: number = 0
    name: string = '';
    seasons: Season[] = [];
    id: number;
    slug: string;
  
    withImage(url: string): CreateIngredientDto {
      this.image = url
      return this
    }
  
    withName(name: string): CreateIngredientDto {
      this.name = name
      return this
    }
  
    withDescription( description: string ): CreateIngredientDto {
      this.description = description
      return this
    }
  
    withSeason(season: Season[]): CreateIngredientDto {
      this.seasons = season
      return this
    }
  
    withDiet(diet: Diet[]): CreateIngredientDto {
      this.diets = diet
      return this
    }
  }