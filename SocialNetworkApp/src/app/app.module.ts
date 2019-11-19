import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesWebComponent } from './botones-web/botones-web.component';
import { MisHistoriasComponent } from './mis-historias/mis-historias.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import {AppServicesService} from './services/app-services.service';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BotonesItemComponent } from './botones-item/botones-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesWebComponent,
    MisHistoriasComponent,
    MisCosasComponent,
    MisColegasComponent,
    EventosComponent,
    PieDePaginaComponent,
    NotFoundComponent,
    ItemListComponent,
    BotonesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [AppServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
