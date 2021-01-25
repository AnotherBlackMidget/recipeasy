import { Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**',   redirectTo: '/e404', pathMatch: 'full' }, // redirect to `e404`
  { path: 'e404', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];