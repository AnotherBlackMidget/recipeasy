import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model'
import { UserCredentials } from '../models/user-credentials.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InitialiseService 
{
  private readonly RECIPES_KEY = 'recipeasy.recipes';
  private readonly CURRENT_USER_KEY = 'recipeasy.currentUser';
  private readonly USERS_KEY = 'recipeasy.users';
  
  constructor() 
  {
    if(JSON.parse(localStorage.getItem(this.RECIPES_KEY) ?? 'null') == null)
    {
      
    }
  }
}
