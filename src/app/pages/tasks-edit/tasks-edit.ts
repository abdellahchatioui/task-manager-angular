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
  private router = inject(ActivatedRoute);
  private navigate = inject(Router);
  private fb = inject(FormBuilder);
  private taskservice = inject(Task);
  private taskId!: string;
  
  ngOnInit(): void {
    this.taskId = String(this.router.snapshot.paramMap.get('id'));
    this.loadTaskById(this.taskId);
  }

  taskForm = this.fb.group({
    title : ['',[Validators.required,Validators.minLength(3)]],
    completed : [false]
  })

  loadTaskById(id : string){
    this.taskservice.getTaskById(id).subscribe(task =>
      this.taskForm.patchValue({ 
        completed : task.completed,
        title : task.title
      }));   
  }
  
  submit(){    
    this.taskservice.updateTask(this.taskId,this.taskForm.value as task).subscribe(()=>
      this.navigate.navigate(['/tasks'])
    );
  }
    
}
