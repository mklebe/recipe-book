export class Recipe {
    public name: string
    public ingredients: string[]
    public worksteps: string[]
    public image: string
    public author: string
    public id: string

    constructor( name: string, author: string ) {
        this.name = name
        this.author = author
        this.ingredients = []
        this.worksteps = []
        this.image = ''
    }

    public addId(id: string): void {
        this.id = id
    }

    public addIngredient( ingredient: string ) {
        this.ingredients.push( ingredient )
    }

    public addWorkstep( workstep: string ) {
        this.worksteps.push( workstep )
    }

    public addImage( image: string ) {
        this.image = image
    }

    public save() {
        throw new Error('Not implemented yet!')
    }
}
