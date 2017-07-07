import { Meal} from './meal-model.component';
import { Pipe, PipeTransform } from '@angular/core';

import {MealComponent } from './meals.component'
@Pipe ({
  name:'comparecalories',
  pure: false

})




export class CaloriesComparePipe implements PipeTransform{
  transform(input : Meal[], mealValueDef){
    var output : Meal[]=[];
    if(mealValueDef === 'high-calorie'){
      for(var i=0; i < input.length; i++){
        if(input[i].calories >500 ){
          output.push(input[i]);
        }

      }
      return output;
    }
    else if(mealValueDef === 'low-calorie'){
      for(var i=0; i < input.length; i++){
        if(input[i].calories <=500){
          output.push(input[i])
        }

      }return output;
    }
    else{
      return input;
    }
  }
}
