import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  newRecipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private authService: AuthService, private router: Router)
  {
    this.newRecipeForm = new FormGroup({
      id: new FormControl(Math.random().toString(16).substring(2)),
      user: new FormControl(authService.currentUser?.email),
      category: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });

    if(!authService.isLoggedIn)
    {
      router.navigate(['']);
    }
  }

    
  

  ngOnInit(): void {
  }

  

  newRecipe() 
  {
    console.log(this.newRecipeForm.value);
    this.recipeService.newRecipe(new Recipe(this.newRecipeForm.value));
  }

  


}
