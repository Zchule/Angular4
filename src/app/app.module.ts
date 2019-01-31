import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { ResaltarDirective } from './directives/resaltar.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'lugares/detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  ]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
