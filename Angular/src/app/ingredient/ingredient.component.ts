import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ingredient } from '../shared/models/Ingredient';
import { IngredientDeleteDialogComponent } from './ingredient-delete-dialog/ingredient-delete-dialog.component';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  ingredients!: Ingredient[];
  showSpinner: boolean = true;

  constructor(
    private ingredientSvc: IngredientService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getIngredients();
  }

  deleteIngredient(id: number): void {
    const dialogRef = this.dialog.open(IngredientDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ingredientSvc.deleteIngredient(id).subscribe(
          (res) => {
            this.getIngredients();
          },
          (err) => {
            console.error;
          }
        );
      }
    });
  }

  //#region Private Functions

  private getIngredients(): void {
    this.ingredientSvc.getIngredients().subscribe((res) => {
      this.ingredients = res;
      this.showSpinner = false;
    });
  }
  //#endregion
}
