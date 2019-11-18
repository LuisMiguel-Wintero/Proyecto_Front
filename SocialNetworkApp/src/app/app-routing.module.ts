import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MisHistoriasComponent } from './mis-historias/mis-historias.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { EventosComponent } from './eventos/eventos.component';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';


const routes: Routes = [
  
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component: MisHistoriasComponent},
  {path : 'miscosas', component: MisCosasComponent},
  {path : 'miscolegas', component: MisColegasComponent},
  {path : 'eventos', component: EventosComponent},
  {path : '**', component: NotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
