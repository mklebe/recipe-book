import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUpdateComponent } from './recipe-update.component';

describe('RecipeUpdateComponent', () => {
  let component: RecipeUpdateComponent;
  let fixture: ComponentFixture<RecipeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
