import { DocumentStore } from 'ravendb';

const store = new DocumentStore('http://http://localhost:8080', 'Test-DB');
store.initialize();

const session = store.openSession();
const test = await session.load("users/2");

console.log(test);