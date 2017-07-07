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
      </div>
      <div class="col-md-4">
        <div *ngFor="let currentMeal of MealsArrey">
          <ul >
            <li>{{currentMeal.name}}</li>

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

  addNewMeal(newMealInput : Meal){
    this.MealsArrey.push(newMealInput);
  }
}
