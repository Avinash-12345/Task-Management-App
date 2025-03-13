import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule here
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  tasks = ['Task 1', 'Task 2', 'Task 3'];
}