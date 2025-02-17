import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, NavbarItem } from '@eff-angular/sharedComponents';

@Component({
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'effAngular';

  navItems: NavbarItem[] = [
    { label: 'home', route: '/' },
    { label: 'expenses approval', route: '/expenses-approval' },
  ];
}
