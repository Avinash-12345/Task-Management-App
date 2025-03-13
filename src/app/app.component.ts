import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopNavComponent, SideMenuComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-manager-app';
  onFilterChanged(filter: string) {
    console.log('Filter changed:', filter);
    // Handle the filter logic here
  }
}
