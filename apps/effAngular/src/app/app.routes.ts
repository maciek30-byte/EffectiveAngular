import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'expenses-overview',
    title: 'Expenses Overview',
    loadComponent: () =>
      import('../pages/expensesOverviewPage/expenses-overview-page.component'),
  },
  {
    path: 'expenses-approval',
    title: 'Expenses Approval',
    loadComponent: () =>
      import('../pages/expensesApprovalPage/expenses-approval-page.component'),
  },
];
