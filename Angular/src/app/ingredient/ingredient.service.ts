import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/models/Ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private apiUrl: string = 'https://localhost:44338/api/Ingredient/';

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl + 'GetIngredients');
  }
  getIngredient(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(this.apiUrl + 'GetIngredient/' + id);
  }
  createIngredient(ingredient: Ingredient): Observable<any> {
    return this.http.post<Ingredient>(
      this.apiUrl + 'CreateIngredient',
      ingredient
    );
  }
  editIngredient(ingredient: Ingredient): Observable<any> {
    return this.http.put<Ingredient>(
      this.apiUrl + 'EditIngredient/' + ingredient.id,
      ingredient
    );
  }
  deleteIngredient(id: number): Observable<any> {
    return this.http.delete<Ingredient>(this.apiUrl + 'DeleteIngredient/' + id);
  }
}
