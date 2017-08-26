import { Component, Input } from '@angular/core';
import {Heroe} from './heroe';

@Component({
    selector: 'detalle-de-heroe',
    template: `
        <div *ngIf="hero">    
            <h2>Detalles de {{hero.nombre}}!</h2>
            <div><label>Identificación: </label>{{hero.identif}}</div>
            <div>
                <label>Nombre: </label><input [(ngModel)]="hero.nombre" placeholder="nombre">
            </div>
        </div>
`
})

export class DetalleDeHeroeComponent {
    @Input() hero: Heroe;
}