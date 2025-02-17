import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface NavbarItem {
  label: string;
  route: string;
}



@Component({
  selector: 'lib-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input({ required: true, transform: addHomeRoute })
  navBarItems: NavbarItem[] = [];
  @Input() languages: string[] = [];

  @Output() languageChange = new EventEmitter();
}

function addHomeRoute (items: NavbarItem[]): NavbarItem[] {
  return [{ label: 'home', route: '/' }, ...items];
}
//@TODO deep dive into it ..//
