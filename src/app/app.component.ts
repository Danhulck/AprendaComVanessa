import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RecipesListComponent],  // 👈 Importa o RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Receitas App';
}
