import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1><strong>Add Food To Log</strong></h1>
    <div>
      <label>Enter Food Name:</label>
      <input #newName>
    </div>

    <div>
      <label>Describe The Food:</label>
      <input #newDescription>
    </div>

    <div>
      <label>Enter Food Callories:</label>
      <input #newCallories>
      <button (click)="
        addClicked(newName.value, newDescription.value, newCallories.value);
        newName.value='';
        newDescription.value='';
        newCallories.value='';
      ">Add To Log</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name: string, description: string, callories: number) {
    var newTaskToAdd: Food = new Food(name, callories , description);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
