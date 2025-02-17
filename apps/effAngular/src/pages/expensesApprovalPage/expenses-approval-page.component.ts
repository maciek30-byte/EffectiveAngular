import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-approval-pages',
  imports: [CommonModule],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesApprovalPageComponent {}
