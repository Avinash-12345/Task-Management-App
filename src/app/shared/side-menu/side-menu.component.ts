import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  template: `
    <button (click)="filter('all')">All</button>
    <button (click)="filter('pending')">Pending</button>
    <button (click)="filter('completed')">Completed</button>
  `,
})
export class SideMenuComponent {
  @Output() filterChanged = new EventEmitter<string>();

  filter(status: string) {
    this.filterChanged.emit(status);
  }
}