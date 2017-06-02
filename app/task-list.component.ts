import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './task.model';

@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="all">Show All</option>
  <option value="types">Show Food Types</option>
  <option value="callories" selected="selected">Show callories</option>
</select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | completeness:selectedCallories">
      <h3><strong>Food Name:</strong> {{ currentTask.name }}</h3>
      <h3><strong>Meal Description:</strong> {{ currentTask.description }}</h3>
      <h3><strong>Food Callories:</strong> {{ currentTask.callories }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "Food";
  onChange(optionFromMenu) {
  this.selectedCompleteness = optionFromMenu;
  console.log(this.selectedCompleteness);
}
  @Input() childTaskList:Food[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Food) {
    this.clickSender.emit(taskToEdit);
  }
}
