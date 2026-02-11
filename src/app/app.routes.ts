import { Routes } from '@angular/router';
import { TasksList } from './pages/tasks-list/tasks-list';
import { TasksDetail } from './pages/tasks-detail/tasks-detail';
import { TasksCreate } from './pages/tasks-create/tasks-create';
import { TasksEdit } from './pages/tasks-edit/tasks-edit';

export const routes: Routes = [
    {path:'tasks',component: TasksList},
    {path:'task/create',component: TasksCreate },
    {path:'task/:id',component: TasksDetail},
    {path:'task/edit/:id',component: TasksEdit},
    {path:'**', redirectTo:'tasks'}
];
