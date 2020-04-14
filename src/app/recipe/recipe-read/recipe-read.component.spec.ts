import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeReadComponent } from './recipe-read.component';

describe('RecipeReadComponent', () => {
  let component: RecipeReadComponent;
  let fixture: ComponentFixture<RecipeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
