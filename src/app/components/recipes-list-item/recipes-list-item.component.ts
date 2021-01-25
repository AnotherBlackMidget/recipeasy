import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: '[app-recipes-list-item]',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.css']
})
export class RecipesListItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() recipeClicked = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }

  clicked() 
  {
    //this.recipeClicked.emit(this.recipe.description);
    if(window.confirm("Are you sure you want to delete this recipe?"))
    {
      this.recipeService.deleteRecipe(this.recipe);
    }
  }

  get category(): string
  {
    switch(this.recipe.category)
    {
      case 0: return "Breakfast";
        
      case 1: return "Dinner";

      case 2: return "Supper";

      default: return "Error";
    }
  }
}
