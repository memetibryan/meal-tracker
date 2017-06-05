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
      new Food()
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
