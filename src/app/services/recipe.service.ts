import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly RECIPES_KEY = 'recipeasy.recipes';
    

  get allRecipes() {
    return this.recipes.map(recipes => new Recipe(recipes)).sort((a,b) => (a.name > b.name) ? 1 : -1);
  }
  
  private get recipes(): Recipe[] {
    let recipes : Recipe[] = [];
    const storedRecipes = JSON.parse(localStorage.getItem(this.RECIPES_KEY) ?? 'null');
  
    if (storedRecipes) 
    {
      recipes = (storedRecipes as Recipe[]).map(obj => new Recipe(obj));
    }
  
    return recipes;
  }
  
  constructor() 
  {
    
  }
  
  newRecipe(newRecipe: Recipe)
  {
    let recipes = this.recipes;

    console.log(newRecipe.name);

    recipes.push(newRecipe);
    localStorage.setItem(this.RECIPES_KEY, JSON.stringify(recipes));
  }

  deleteRecipe(targetRecipe: Recipe)
  {
    let recipes = this.recipes;
    console.log(targetRecipe.name);

    var index = -1;

    for(var i = 0; i < recipes.length; i += 1) {
        if(recipes[i].id === targetRecipe.id) {
            index = i;
        }
    }
    
    if (index > -1) 
    {
      recipes.splice(index, 1);
      localStorage.setItem(this.RECIPES_KEY, JSON.stringify(recipes));
    }
   
  }

  

}
