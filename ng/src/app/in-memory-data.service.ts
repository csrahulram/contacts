import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const contacts = [
      { id: 1, name: 'Rahul', phone: '9962293022' },
      { id: 1, name: 'sampath', phone: '9884890838' },
      { id: 1, name: 'Jaya', phone: '9884564969' },
      { id: 1, name: 'Rekha', phone: '9988554455' },
      { id: 1, name: 'Rahul', phone: '9962293022' }
    ];
    return {contacts};
  }
}
