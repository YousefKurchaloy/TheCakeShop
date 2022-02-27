import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PageMode } from 'src/app/shared/enums/PageMode';
import { Ingredient } from 'src/app/shared/models/Ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-add-edit',
  templateUrl: './ingredient-add-edit.component.html',
  styleUrls: ['./ingredient-add-edit.component.css'],
})
export class IngredientAddEditComponent implements OnInit {
  pageModeEnum = PageMode;
  ingredientId: number = 0;
  pageMode: PageMode = PageMode.Create;
  ingredientForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    isVegan: [false, Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ingredientSvc: IngredientService
  ) {}

  ngOnInit(): void {
    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.preparePageForEditMode();
    }
  }

  addEditIngredient(): void {
    if (this.ingredientForm.valid) {
      const ingredient: Ingredient = this.ingredientForm.value;

      if (this.pageMode == PageMode.Create) {
        this.ingredientSvc.createIngredient(ingredient).subscribe((res) => {
          this.router.navigate(['/ingredients']);
        });
      } else {
        this.ingredientSvc.editIngredient(ingredient).subscribe((res) => {
          this.router.navigate(['/ingredients']);
        });
      }
    }
  }
  //#region Private functions

  preparePageForEditMode() {
    this.ingredientSvc.getIngredient(this.ingredientId).subscribe((res) => {
      this.ingredientForm.patchValue({
        id: res.id,
        name: res.name,
        isVegan: res.isVegan,
      });
    });
  }

  private setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.ingredientId = Number(this.route.snapshot.paramMap.get('id'));
      this.pageMode = PageMode.Edit;
    }
  }

  //#endregion
}
