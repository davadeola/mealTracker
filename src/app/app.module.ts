import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MealComponent} from './meals.component'
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms'
import {EditMealComponent} from './edit-meal.component'
import {CaloriesComparePipe} from './calories.pipe'
@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    EditMealComponent,
    CaloriesComparePipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
