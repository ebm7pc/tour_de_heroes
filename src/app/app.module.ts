import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms'; // Desde aquí ya se llama al NgModel
import {DetalleDeHeroeComponent} from './detalle-de-heroe.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ AppComponent, DetalleDeHeroeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
