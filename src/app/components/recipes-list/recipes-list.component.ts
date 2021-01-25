import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit 
{

  get recipes(): Recipe[] 
  {
    return this.recipeService.allRecipes.filter( recipe => recipe.user == this.authService.currentUser?.email);
  }
  
  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit(): void { }

  recipeClicked(recipeDescription: string) {
    alert(recipeDescription);
  }
}

