export class Ingredient {
    public name: string
    public description: string

    constructor( name: string ) {
        this.name = name
    }

    public addDescription( desc: string ): void {
        this.description = desc
    }
}
