import { Injectable } from '@angular/core';
import { DocumentStore } from 'ravendb';

@Injectable({
  providedIn: 'root'
})
export class ChangesApiService {

  store = new DocumentStore('http://localhost:8080', 'Einkaufszettel-DB');

  private changes: any;
  private docsChanges: any;
  
  constructor() {
    this.store.initialize();
    this.changes = this.store.changes();
    this.docsChanges = this.changes.forAllDocuments();
  }

  watchChanges() {
      this.docsChanges.on("data", (change: any) => {
        console.log(change);
      });
    
      this.docsChanges.on("error", (err: any) => {
        console.error(err);
      });
    }
    
  stopWatching() {
    this.changes.dispose();
  }

}