import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Tasks:
 * 1. Create a lazy loaded route to the DogModule.
 * 2. Use the user resolver to pre-load user data for any component that needs it (like the sidebar).
 * 3. Create a route guard that redirects excommunicado users to a page that says they don't have access.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '??',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '??' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
