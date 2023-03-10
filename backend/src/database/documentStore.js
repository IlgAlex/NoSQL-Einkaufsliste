import { DocumentStore } from 'ravendb';

const store = new DocumentStore('http://localhost:8080', 'Test-DB');
store.initialize();

export { store }