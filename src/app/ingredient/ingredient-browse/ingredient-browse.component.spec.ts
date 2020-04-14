import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientBrowseComponent } from './ingredient-browse.component';

describe('IngredientBrowseComponent', () => {
  let component: IngredientBrowseComponent;
  let fixture: ComponentFixture<IngredientBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
