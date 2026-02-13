import { Component, input, output, signal } from '@angular/core';
import { TasksEdit } from '../../pages/tasks-edit/tasks-edit';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [TasksEdit],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = input.required<task>();
  taskDelete = output<string>();
  onClick = signal<boolean>(false);

  taskUpdate($event : boolean){   
    if(!$event){
      this.onClick.set($event); 
    }
  }

  onDelete(){
    this.taskDelete.emit(this.task().id);
  }
}
