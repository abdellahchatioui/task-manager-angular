import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from '../../services/task';
import { TaskCard } from '../../components/task-card/task-card';
import { TasksCreate } from '../tasks-create/tasks-create';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  imports: [TaskCard, TasksCreate, RouterLink, RouterModule],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksList implements OnInit{
  tasks = signal<task[]>([]);

  private taskservice = inject(Task);

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
     this.taskservice.getTasks().subscribe(
      data => {
        this.tasks.set(data);
      }
    )
  }

  addTask(newTask : {title:string,completed:boolean}){
    this.taskservice.addTask(newTask).subscribe(savedTask => 
      this.tasks.update(allTasks => [...allTasks,savedTask])
    );
  }

  updateTask(updatedtask : {title:string,completed:boolean}){

  }

  deleteTask(id : string){
    this.taskservice.deleteTask(id).subscribe();
    this.tasks.update(prevTasks => prevTasks.filter(t => t.id !== id));
  }
}
