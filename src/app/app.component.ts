import { Component } from '@angular/core';
import {Meal} from './meal-model.component'
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3><em>...track a your food lifestyle</em></h3>

    <div class="row">
      <div class="col-md-8">
        <meal (MealInputSender)="addNewMeal($event)"></meal>
        <edit-meal [selectedChildMeal]="selectedMeal" (finished)="finished(selectedMeal)"></edit-meal>


      </div>
      <div class="col-md-4">
        <div *ngFor="let currentMeal of MealsArrey">

        <ul><pre>
{{currentMeal.name}}
{{currentMeal.details}}
{{currentMeal.calories}}
<button (click)=startEdit(currentMeal) class="btn btn-md btn-warning">EDIT</button>
            </pre>
          </ul>

        </div>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   MealsArrey : Meal[] =[];
   public selectedMeal: Meal = null;

startEdit(mealToEdit : Meal){
  this.selectedMeal=mealToEdit;
  console.log(this.selectedMeal);
}

finished(selectedMeal){
  this.selectedMeal=null;
  console.log(this.selectedMeal);
}

  addNewMeal(newMealInput : Meal){
    this.MealsArrey.push(newMealInput);
  }
}
