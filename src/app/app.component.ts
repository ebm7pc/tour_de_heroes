import { Component } from '@angular/core';

export class Heroe {
  identif: number;
  nombre: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{titulo}}</h1>
    <h2>Detalles de {{heroe.nombre}}!</h2>
    <div><label>Identificación: </label>{{heroe.identif}}</div>
    <div>
      <label>Nombre: </label>
      <input [(ngModel)]="heroe.nombre" placeholder=nombre>
    </div>
    `
})
export class AppComponent  {
  name = 'Eduardo';
  titulo= 'Tour De Los Heroes';
  heroe: Heroe = {
    identif: 1,
    nombre: 'WindStorm'
  };
}
