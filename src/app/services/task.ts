import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private url = "http://localhost:3000/tasks";

  private http = inject(HttpClient);

  getTasks(){
    return this.http.get<task[]>(this.url);
  }

  getTaskById(id:string){
    return this.http.get<task>(`${this.url}/${id}`);
  }

  addTask(task: { title: string, completed: boolean }) {
    return this.http.post<task>(`${this.url}`,task);
  }

  updateTask(id : string,task : task){
    return this.http.put<task>(`${this.url}/${id}`,task);
  }

  deleteTask(id : string){
    return this.http.delete(`${this.url}/${id}`);
  }
}