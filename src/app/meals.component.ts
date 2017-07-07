import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Meal} from './meal-model.component'

@Component({
  selector: 'meal',
  template:`
    <form class="form">
      <div class="form-group">
        <label>What meal did you eat?</label>
        <input #name placeholder="What meal did you eat?" type="text" class="form-control">
      </div>
        <div class="form-group">
          <label>Description?</label>
          <input #details placeholder="Description?" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Number of Calories</label>
          <input #calories placeholder="Number of calories" type="number" class="form-control">
        </div>
        <button class="btn btn-lg btn-info" (click)="addMeal(name.value, details.value, calories.value); ">SUBMIT</button>
    </form>


  `
})

export class MealComponent{
@Output() MealInputSender = new EventEmitter();
addMeal(name: string, details: string, calories: number){
  var newMeal: Meal = new Meal (name, details, calories);
  this.MealInputSender.emit(newMeal);
}

}
