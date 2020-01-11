export class Ingredient {
    public name: string
    public description: string
    public id: number

    constructor( name: string ) {
        this.name = name
    }

    public addDescription( desc: string ): void {
        this.description = desc
    }
}
