import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = input.required<task>();
  taskDelete = output<string>();
  onDelete(){
    this.taskDelete.emit(this.task().id);
    }
}
