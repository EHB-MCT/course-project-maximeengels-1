import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'program',        component: ProgramComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // WILDCARD ROUTE  intercepts invalid URLs and handles them gracefully
  // dit is een error route (kan eventueel een 404 pagina zijn)
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
