import { Component, inject, Injector, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../services/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks-edit.html',
  styleUrl: './tasks-edit.css',
})
export class TasksEdit implements OnInit{
  private fb = inject(FormBuilder);
  private taskservice = inject(Task);
  task = input.required<task>();
  taskUpdate = output<boolean>();

  ngOnInit(): void {
      this.taskForm.patchValue({
        title : this.task().title,
        completed : this.task().completed
      })
  }
  
  taskForm = this.fb.group({
    title : ['',[Validators.required,Validators.minLength(3)]],
    completed : [false]
  })


  submit(){    
    this.taskservice.updateTask(this.task().id,this.taskForm.value as task).subscribe(()=>
      this.taskUpdate.emit(false)
    );
  }
    
}
