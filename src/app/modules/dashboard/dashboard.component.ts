import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';
import { TaskFormComponent } from '../../modules/tasks/task-form/task-form.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideMenuComponent, TaskFormComponent, CommonModule],
  template: `
    <app-side-menu (filterChanged)="filterTasks($event)"></app-side-menu>

    <ul>
      <li *ngFor="let task of filteredTasks">
        {{ task.title }} ({{ task.status }}) - {{ task.dueDate }}
        <button (click)="editTask(task)">Edit</button>
        <button (click)="deleteTask(task)">Delete</button>
      </li>
    </ul>

    <button class="add-task-btn" (click)="openTaskForm()">+</button>

    <app-task-form
      *ngIf="showTaskForm"
      [task]="selectedTask"
      (save)="saveTask($event)"
      (close)="closeTaskForm()">
    </app-task-form>
  `,
  styles: [`
    .add-task-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #007bff;
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    .add-task-btn:hover {
      background-color: #0056b3;
    }
  `],
})
export class DashboardComponent {
  tasks = [
    { title: 'Task 1', status: 'pending', dueDate: '2025-03-20' },
    { title: 'Task 2', status: 'completed', dueDate: '2025-03-21' },
  ];
  filteredTasks = [...this.tasks];
  showTaskForm = false;
  selectedTask: any = { title: '', status: 'pending', dueDate: '' };

  filterTasks(status: string) {
    if (status === 'all') {
      this.filteredTasks = [...this.tasks];
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === status);
    }
  }

  openTaskForm() {
    this.selectedTask = { title: '', status: 'pending', dueDate: '' };
    this.showTaskForm = true;
  }

  editTask(task: any) {
    this.selectedTask = { ...task };
    this.showTaskForm = true;
  }

  saveTask(task: any) {
    if (this.selectedTask.title) {
      // Edit existing task
      const index = this.tasks.findIndex(t => t.title === this.selectedTask.title);
      this.tasks[index] = task;
    } else {
      // Add new task
      this.tasks.push(task);
    }
    this.filterTasks('all');
    this.showTaskForm = false;
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.filterTasks('all');
  }

  closeTaskForm() {
    this.showTaskForm = false;
  }
}
