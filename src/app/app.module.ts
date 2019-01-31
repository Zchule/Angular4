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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'lugares/detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  ];

  export const firebaseConfig = {
    production: false,
    firebase : {
      apiKey: "AIzaSyCxGDvQ3QGX2rRwKkIbEaYscWekwTw8c_A",
      authDomain: "platzisquare-7e8ce.firebaseapp.com",
      databaseURL: "https://platzisquare-7e8ce.firebaseio.com",
      projectId: "platzisquare-7e8ce",
      storageBucket: "platzisquare-7e8ce.appspot.com",
      messagingSenderId: "59699983713"
    }
  };

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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
