import {Injectable} from '@angular/core';
import {Heroe} from './heroe';
import {LISTA_HEROES} from './mock-heroes';

@Injectable()
export class HeroeService {
    getLISTA_HEROES(): Promise<Heroe[]> {
        return Promise.resolve(LISTA_HEROES);
    }
}