import { Component } from '@angular/core';
import { Food } from './task.model';

@Component({
  selector: 'meal-app',
  template: `
  <div class="container-fluid">
  <div class="jumbotron">
  <new-task
    (newTaskSender)="addTask($event)"
  ></new-task>
  </div>
  <div class="row">
    <h1><strong>Meal Tracker Web App</strong></h1>
    <div class="col-md-6">
      <food-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></food-list>
     </div>

     <div class="col-md-6">
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterTaskList:Food[] = [
      new Food("Rice and Beans.",320, "Best meal ever with my mum after church"),
      new Food("Tea with Bread.",150, "Normal,though noticed it had a lot of sugar"),
      new Food("Pilau with yoghurt.",215, "Yummy! There's nothing sweet like this...!"),
      new Food("Ugali with Fish.",180, "Kind liked the meal though i hate fish because of  the many bones...haha, ikr!"),
      new Food("Chapati with Ndengu.",340, "Sound fancy i know but its normal and cheap hence convenient as i hardly had no money that day"),
      new Food("Pizza with Soda.",213, "Wow,The best veges pizza i ever had, I swear i will go back to the place"),
      new Food("Fish with Ugali.",213, "No say here!")
  ];
  selectedTask: Food = null;
  showDetails(clickedTask: Food) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Food) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
