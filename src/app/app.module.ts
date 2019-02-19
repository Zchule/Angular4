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
import { AutotizacionService } from './services/authorization.service';

import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CrearComponent } from './crear/crear.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';

import { LinkyfystrPipe } from './pipes/linkyfystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'lugares', pathMatch: 'full' },
  { path: 'lugares', component: LugaresComponent },
  { path: 'lugares/detalle/:id', component: DetalleComponent },
  { path: 'lugares/crear/:id', component: CrearComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'map', component: MapComponent },
  ];

  export const firebaseConfig = {
      apiKey: 'AIzaSyCxGDvQ3QGX2rRwKkIbEaYscWekwTw8c_A',
      authDomain: 'platzisquare-7e8ce.firebaseapp.com',
      databaseURL: 'https://platzisquare-7e8ce.firebaseio.com',
      projectId: 'platzisquare-7e8ce',
      storageBucket: 'platzisquare-7e8ce.appspot.com',
      messagingSenderId: '59699983713'
  };

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    MapComponent,
    LinkyfystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9qJ58RNJfsaPz9LkOqN5Cx4gJIThbpHQ'
    }),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LugaresService,
    AutotizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
