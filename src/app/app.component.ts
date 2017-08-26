import { Component } from '@angular/core';
import {Heroe} from './heroe';


const LISTA_HEROES: Heroe[] = [
  {identif: 1, nombre: 'Supersona'},
  {identif: 2, nombre: 'Dr. Empanada'},
  {identif: 3, nombre: 'Doña Gallina'},
  {identif: 4, nombre: 'Puebloman'},
  {identif: 5, nombre: 'Superpaisaman'},
  {identif: 6, nombre: 'Capitán Chibchombia'},
  {identif: 7, nombre: 'Ultrapato'},
  {identif: 8, nombre: 'Condor Herido'},
  {identif: 9, nombre: 'El Divino Niño'},
  {identif: 10, nombre: 'Sagrado Corazón'}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{titulo}}</h1>
    <h2>Mis Heroes</h2>
    <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHeroe" (click)="onSelect(hero)">
      <span class="badge">{{hero.identif}}</span> {{hero.nombre}}
    </li>
  </ul>
  <detalle-de-heroe [hero]="selectedHeroe"></detalle-de-heroe>
    `,

    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
    
})

export class AppComponent  {
  titulo= 'Tour De Los Heroes';
  heroes = LISTA_HEROES;
  selectedHeroe: Heroe;
  onSelect(hero: Heroe): void {
    this.selectedHeroe = hero
  }
  };

  
