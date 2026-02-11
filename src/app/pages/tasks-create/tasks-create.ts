import { Component, output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks-create.html',
  styleUrl: './tasks-create.css'
})
export class TasksCreate {
  private fb = inject(FormBuilder);
  taskAdded = output<{title:string,completed:boolean}>();

  taskForm = this.fb.group({
    title : ['',[Validators.required,Validators.minLength(3)]],
    completed : [false]
  })

  submit() {
    this.taskAdded.emit(this.taskForm.value as {title:string,completed:boolean});
    this.taskForm.reset({title:'',completed:false});
  }

}
