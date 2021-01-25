import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './components/recipes-list-item/recipes-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RecipesComponent,
    ProfileComponent,
    UsersListItemComponent,
    UsersListComponent,
    PageNotFoundComponent,
    RecipesListComponent,
    RecipesListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
