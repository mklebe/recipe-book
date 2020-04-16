import { Component, OnInit } from '@angular/core';
import { CreateIngredientDto } from 'src/app/recipe/shared/CreateIngredientDto';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Season, FileUploadDto, Ingredient } from 'src/app/api/models';
import { IngredientService, ImageService } from 'src/app/api/services';

@Component({
  selector: 'app-ingredient-update',
  templateUrl: './ingredient-update.component.html',
  styleUrls: ['./ingredient-update.component.styl']
})
export class IngredientUpdateComponent implements OnInit {

  protected ingredientImage: string = ''

  protected currentIngredient: CreateIngredientDto

  protected isAdded: boolean
  protected name: string
  protected description: string
  protected ingredientForm: FormGroup
  protected availableMonths =  [
    {id: 1, name:'January'},
    {id: 2, name:'February'},
    {id: 3, name:'March'},
    {id: 4, name:'April'},
    {id: 5, name:'May'},
    {id: 6, name: 'June'},
    {id: 7, name:'July'},
    {id: 8, name: 'August'},
    {id: 9, name: 'September'},
    {id: 10, name:'October'},
    {id: 11, name: 'November'},
    {id: 12, name:'December'}
  ]

  protected diets = [
    {id: 1, name: 'Vegan'},
    {id: 2, name: 'Vegetarian'},
    {id: 3, name: 'Omnivore'}
  ]

  protected ingredientList: Ingredient[] = []

  constructor(
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder,
    private imageService: ImageService
  ) {
    this.isAdded = false
    this.ingredientForm = this._createFormGroup()
    this.currentIngredient = new CreateIngredientDto()
  }

  private _createFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      seasons: this.toFormGroup(this.availableMonths),
      diet: new FormControl('', [Validators.required])
    });
  }

  private toFormGroup( data: Array<any> ): FormArray {
    const formControls: FormControl[] = data.map(m => new FormControl(false) )
    return new FormArray( formControls )
  }

  ngOnInit() {}

  private addIngredient(): void {
    this.ingredientService.create( {body: this.currentIngredient} )
      .subscribe( () => {
        this.name = ''
        this.description = ''
        this.isAdded = true
      })
  }


  submit(): void {
    
    const temp = this.ingredientForm.value

    const season: Season[] = this.cleanSeason()

    this.currentIngredient.withName(temp.name)
      .withDescription(temp.description).withSeason(season)
      .withDiet([temp.diet])

    this.addIngredient( )
  }

  protected imageUploaded( files: FileList ): void {
    const image = new IngredientImage( files.item(0) )

    this.imageService.uploadImage({
      body: image
    }).subscribe(( response ) => {
      this.ingredientImage = response.url
      this.currentIngredient.withImage(response.url)
    })
  }

  private cleanSeason(): Season[] {
    return this.ingredientForm.value.seasons
      .map((month, i) => {
        if (!month) {
          return false
        }
        else {
          return {
            id: i,
            name: this.availableMonths[i].name
          }
        }
      })
      .filter(value => value)
  }
}

class IngredientImage implements FileUploadDto {
  file: Blob;
  constructor( file: Blob ) {
    this.file = file
  }
}