import { Component, inject, Injector, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../services/task';

@Component({
  selector: 'app-tasks-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks-edit.html',
  styleUrl: './tasks-edit.css',
})
export class TasksEdit {
  private fb = inject(FormBuilder);
  private taskservice = inject(Task);
  
  taskForm = this.fb.group({
    title : ['',[Validators.required,Validators.minLength(3)]],
    completed : [false]
  })

  updatedtask = output<{title:string,completed:boolean}>();
  id = input<string>();

  loadTaskById(id:string){
    this.taskservice.getTaskById(id).subscribe(task =>
      this.taskForm.setValue(task) 
  );   
  }
  
  taskUpdate(data :  {title:string,completed:boolean}){

  }

  submit(){
    
  }
    
}
