import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../modules/tasks/task.model';

@Injectable({ providedIn: 'root' })
export class TaskStoreService {
  private taskSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSubject.asObservable();

  setTasks(tasks: Task[]) {
    this.taskSubject.next(tasks);
  }

  addTask(task: Task) {
    this.taskSubject.next([...this.taskSubject.getValue(), task]);
  }
}