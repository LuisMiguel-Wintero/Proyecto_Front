import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesWebComponent } from './botones-web/botones-web.component';
import { MisHistoriasComponent } from './mis-historias/mis-historias.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { EventosComponent } from './eventos/eventos.component';

import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesWebComponent,
    MisHistoriasComponent,
    MisCosasComponent,
    MisColegasComponent,
    EventosComponent,
    PieDePaginaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
