import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const contacts = [
      { id: 1, name: 'Rahul', phone: '9962293022' }
    ];
    return {contacts};
  }
}
