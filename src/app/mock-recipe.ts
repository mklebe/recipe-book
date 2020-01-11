import { Recipe } from './recipes/shared/recipe';
import { Ingredient } from './ingredients/shared/ingredient';


const ingredients = new Map<string, Ingredient>()
ingredients.set('Bockwurst', new Ingredient('Bockwurst'))
ingredients.set('Hackfleisch', new Ingredient('Hackfleisch'))
ingredients.set('Wasser', new Ingredient('Wasser'))
ingredients.set('Brötchen', new Ingredient('Brötchen'))
ingredients.set('Senf', new Ingredient('Senf'))
ingredients.set('Salat', new Ingredient('Salat'))
ingredients.set('Nudeln', new Ingredient('Nudeln'))
ingredients.set('Essig', new Ingredient('Essig'))
ingredients.set('Chilli', new Ingredient('Chilli'))

export const RECIPE_LIST_MOCK: Recipe[] = [
    new Recipe('Nudelsuppe sauer scharf', [
        ingredients.get('Nudeln'),
        ingredients.get('Wasser'),
        ingredients.get('Chilli'),
        ingredients.get('Essig'),
    ]),
    new Recipe('Bockwurst mit Senf', [
        ingredients.get('Bockwurst'),
        ingredients.get('Senf'),
        ingredients.get('Wasser'),
        ingredients.get('Brötchen'),
    ]),
    new Recipe('Chefsalat', [
        ingredients.get('Salat'),
        ingredients.get('Essig'),
    ]),
    new Recipe('Dreierlei Fleisch', [
        ingredients.get('Wasser'),
        ingredients.get('Bockwurst'),
        ingredients.get('Hackfleisch'),
    ]),
    new Recipe('Moussaka', [
        ingredients.get('Wasser'),
        ingredients.get('Hackfleisch'),
    ]),
]