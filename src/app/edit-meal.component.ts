import {Component, Output, Input, EventEmitter} from '@angular/core'
import {Meal} from './meal-model.component'

@Component({
  selector: 'edit-meal',
  template:`

  <div *ngIf=selectedChildMeal>
  <h2>EDIT</h2>
  <form class='form' id="form2">
    <div class="form-group">
      <label>What did you eat?</label>
      <input [(ngModel)]="selectedChildMeal.name" class=form-control placeholder="What did you eat?" name="name">
    </div>
    <div class="form-group">
      <label>Desribe it for Us</label>
      <input [(ngModel)]="selectedChildMeal.details" class=form-control placeholder="Describe" name="details">
    </div>
    <div class="form-group">
      <label>Calories</label>
      <input [(ngModel)]="selectedChildMeal.calories" class=form-control placeholder="Number of calories" type="number" name="calories">
    </div>
  </form>
  <button (click)="finished()" class="btn btn-success">DONE</button>

  </div>


  `,
  styleUrls: ['./app.component.css']
})

export class EditMealComponent{
@Input () selectedChildMeal : Meal[];
@Output () editOutputSender = new EventEmitter();

  finished(){
    this.editOutputSender.emit();

  }



}
