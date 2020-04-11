import { Component, OnInit } from '@angular/core';
import { IngredientService, RecipeService, ImageService } from 'src/app/api/services';
import { Ingredient, FileUploadDto, CloudinaryImage } from 'src/app/api/models';
import { Recipe } from 'src/app/api/models'

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  protected foundIngredients: Ingredient[]
  protected usedIngredients: Ingredient[]

  protected recipeImageUrl: string = ''

  protected recipeName: string
  protected currentIngredient: string

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private imageService: ImageService
  ) {
    this.recipeName = ""
    this.currentIngredient = ""

    this.foundIngredients = []
    this.usedIngredients = []
  }

  ngOnInit() {
  }

  protected addIngredient( ingredient: Ingredient ): void {
    this.usedIngredients.push( ingredient )
    this.foundIngredients = this.foundIngredients.filter( i => i !== ingredient ) 
  }

  protected findIngredientByQuery(): void {
    if( this.currentIngredient.length >= 3 ) {
      const currentIngredient = this.currentIngredient
      this.ingredientService.findIngredient({term: currentIngredient})
        .subscribe( ( ingredients ) => {
          this.foundIngredients = ingredients
        })
    }
  }

  protected imageUploaded( files: FileList ) {
    const image = new RecipeImage( files.item(0) )

    console.log('### Uploads Image ###')

    this.imageService.uploadImage({
      body: image
    }).subscribe(( imageUrl ) => {
      console.log('###Image Uploaded###')
      console.log( imageUrl )
      this.recipeImageUrl = imageUrl.url
    })
  }

  protected addRecipe(): void {
    const recipe = new CreateRecipeDto(
        this.recipeName, 
        this.usedIngredients)

    this.recipeService.addRecipe({body: recipe})
      .subscribe( recipe => {
        window.console.log( recipe )
      })
  }
}

class CreateRecipeDto implements Recipe {
  hits: number
  id: number
  image: string
  ingredients: Ingredient[]
  name: string
  slug: string

  constructor( name: string, ingredients: Ingredient[] ) {
    this.name = name
    this.id = null
    this.image = ''
    this.slug = null
    this.ingredients = ingredients
    this.hits = 0
  }
}

class RecipeImage implements FileUploadDto {
  file: Blob;
  constructor( file: Blob ) {
    this.file = file
  }
}
