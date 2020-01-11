import { Ingredient } from '../ingredients/shared/ingredient'

export class Recipe {
    public name: string
    public ingredients: Ingredient[]
    public worksteps: string
    public image: string
    public id: string

    constructor( name: string, ingredients: Ingredient[] ) {
        this.name = name
        this.ingredients = ingredients
        this.worksteps = ''
        this.image = ''
    }

    public addId(id: string): void {
        this.id = id
    }

    public addIngredient( ingredient: Ingredient[] ) {
        this.ingredients = ingredient
    }

    public addWorkstep( workstep: string ) {
        this.worksteps = workstep
    }

    public addImage( image: string ) {
        this.image = image
    }
}
