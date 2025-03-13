import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="modal">
      <input [(ngModel)]="task.title" placeholder="Title" required />
      <input [(ngModel)]="task.dueDate" type="date" />
      <select [(ngModel)]="task.status">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button (click)="saveTask()">Save</button>
      <button (click)="closeForm()">Cancel</button>
    </div>
  `,
  styles: [`
    .modal {
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -20%);
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
  `]
})
export class TaskFormComponent {
  @Input() task = { title: '', status: 'pending', dueDate: '' };
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  saveTask() {
    this.save.emit(this.task);
  }

  closeForm() {
    this.close.emit();
  }
}
