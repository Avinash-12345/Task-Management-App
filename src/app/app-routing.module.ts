import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { TaskListComponent } from './modules/tasks/task-list/task-list.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
    { path: '**', redirectTo: 'login' } // Catch all for unmatched routes
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}