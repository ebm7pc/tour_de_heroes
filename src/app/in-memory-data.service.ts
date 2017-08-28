import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Supersona' },
      { id: 2, name: 'Dr. Empanada' },
      { id: 3, name: 'Doña Gallina' },
      { id: 4, name: 'Sagrado Corazón' },
      { id: 5, name: 'Chirrete Silvador' },
      { id: 6, name: 'Superpaisaman' },
      { id: 7, name: 'Capitán Chibchombia' },
      { id: 8, name: 'Ultrapato' },
      { id: 9, name: 'Condor Herido' },
      { id: 10, name: 'El Divino Niño' }
    ];
    return {heroes};
  }
}
