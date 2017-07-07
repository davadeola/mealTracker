import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MealModelComponent} from './meal-model.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MealModelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
