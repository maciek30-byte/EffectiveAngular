import { Route } from '@angular/router';
import { ExpensesOverviewPageComponent } from '../../page/expensesOverviewPage/expenses-overview-page.component';
import { ExpensesApprovalPageComponent } from '../../page/expensesApprovalPage/expenses-approval-page.component';

export const appRoutes: Route[] = [
  { path: 'expenses-overview', component: ExpensesOverviewPageComponent },
  { path: 'expenses-approval', component: ExpensesApprovalPageComponent },
];
