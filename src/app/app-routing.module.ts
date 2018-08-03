import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceptComponent } from './recept/recept.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'recepti', component: DashboardComponent },
  { path: 'recepti/:id', component: ReceptComponent },
  { path: '',  redirectTo: '/products', pathMatch: 'full' },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
