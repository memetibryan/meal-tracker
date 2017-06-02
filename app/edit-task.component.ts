import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Food Log</h1>
      <div>
        <label>Enter Food Name:</label>
        <input [(ngModel)]="childSelectedTask.name">
      </div>
      <div>
        <label>Enter Food Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter Food Callories:</label>
        <input [(ngModel)]="childSelectedTask.callories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
