import { Component } from '@angular/core';
import {Meal} from './meal-model.component'
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h4><em>...track your food lifestyle</em></h4>

    <div class="row">
    <h2 >Today you have eaten </h2>
      <div class="col-md-6">
      <form class="form">
      <div class="form-group">
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value="all" selected="selected" >ALL</option>
        <option value="high-calorie">High Calories Foods</option>
        <option value="low-calorie">Low Calories Foods </option>
      </select>
      </div>
      </form>
        <meal (MealInputSender)="addNewMeal($event)"></meal>
        <edit-meal [selectedChildMeal]="selectedMeal" (finished)="finished()"></edit-meal>


      </div>
      <div class="col-md-6">
        <div *ngFor="let currentMeal of MealsArrey |comparecalories:selectedValue">

        <ul>
<h3>{{currentMeal.name}}</h3><br>
<p>{{currentMeal.details}}</p>
<p>{{currentMeal.calories}}</p><br>
<button (click)=startEdit(currentMeal) class="btn btn-md btn-warning">EDIT</button>

          </ul>

        </div>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedValue : string = "all"
  public totalCalArray = [];
   public MealsArrey : Meal[] =[];
   public selectedMeal: Meal = null;
   public totalcalories: number= this.MealsArrey.length
startEdit(mealToEdit : Meal){
  this.selectedMeal=mealToEdit;
  console.log(this.selectedMeal);
}

finished(){
  this.selectedMeal =null;
  console.log(this.selectedMeal);
}

  addNewMeal(newMealInput : Meal){
    this.MealsArrey.push(newMealInput);
  }
  onChange(selectedMenuValue){
    this.selectedValue=selectedMenuValue;
    console.log(this.selectedValue);
  }


}
