export class Recipe {
    public name: string
    public ingredients: string
    public worksteps: string
    public image: string
    public id: string

    constructor( name: string ) {
        this.name = name
        this.ingredients = ''
        this.worksteps = ''
        this.image = ''
    }

    public addId(id: string): void {
        this.id = id
    }

    public addIngredient( ingredient: string ) {
        this.ingredients = ingredient
    }

    public addWorkstep( workstep: string ) {
        this.worksteps = workstep
    }

    public addImage( image: string ) {
        this.image = image
    }
}
