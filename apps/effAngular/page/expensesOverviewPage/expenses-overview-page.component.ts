import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-overview-page',
  imports: [CommonModule],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesOverviewPageComponent {}
