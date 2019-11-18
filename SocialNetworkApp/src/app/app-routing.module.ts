import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MisHistoriasComponent } from './mis-historias/mis-historias.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const routes: Routes = [
  {path : '', component: AppComponent},
  {path : 'home', component: AppComponent},
  {path : 'miscosas', component: MisHistoriasComponent},
  {path : 'miscolegas', component: MisColegasComponent},
  {path : 'eventos', component: EventosComponent},
  {path : '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
