import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './shared/components/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'business',
        pathMatch: 'full',
      },
      {
        path: 'administration',
        loadChildren: () => import('./feature/administration/administration.module').then((m) => m.AdministrationModule)
      },
      {
        path: 'business',
        loadChildren: () => import('./feature/business/business.module').then((m) => m.BusinessModule)
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
