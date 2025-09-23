import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  image?: string; // 👈 opcional: imagem
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Bolo de Chocolate',
      ingredients: ['Farinha', 'Cacau', 'Açúcar', 'Ovos'],
      instructions: 'Misture todos os ingredientes e asse por 30 minutos.',
      image: 'assets/img/bolo-de-chocolate.png'
    },
    {
      id: 2,
      name: 'Macarrão à Bolonhesa',
      ingredients: ['Macarrão', 'Carne Moída', 'Molho de Tomate', 'Queijo'],
      instructions: 'Cozinhe o macarrão e prepare o molho com a carne e tomate.',
      image: 'assets/img/macarrao-a-bolonhesa.png'
    }
  ];

  getAllRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  getRecipeById(id: number): Observable<Recipe | undefined> {
    return of(this.recipes.find(r => r.id === id));
  }
}
