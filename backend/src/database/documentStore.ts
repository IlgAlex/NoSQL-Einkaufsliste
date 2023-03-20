import { DocumentStore } from 'ravendb';

const store = new DocumentStore('http://localhost:8080', 'Einkaufszettel-DB');
store.initialize();

export { store }