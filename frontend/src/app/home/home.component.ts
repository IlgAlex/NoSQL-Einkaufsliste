import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_services/api-service.service';
import { ChangesApiService } from '../_services/changes-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private apiService: ApiServiceService, private router: Router) { }

  httpError: HttpErrorResponse | undefined = undefined;
  elements: Array<any> = [];
  elements_open: Array<any> = [];
  elements_closed: Array<any> = [];

  name: string | undefined;

  ngOnInit(): void {
    // const changes = this.changesApi.watchChanges(); // Changes-API starten und Änderungen abonnieren (siehe changes-api.service.ts)
    this.getElements();
  }


  handleInput(event: any, key: string): void {
    if(key === 'name') {
      this.name = event.target.value;
    }
  }

  getElements(): void {
    this.apiService.getElements((data) => {
      if(data instanceof HttpErrorResponse) {
        console.error('Error: ', data.status, ' ', data.statusText);
        this.httpError = data;
        return;
      } else {
        this.elements = data;
        this.elements_open = [];
        this.elements_closed = [];
        for(let i = 0; i < data.length; i++) {
          data[i].created = this.formatDate(data[i].created);   // Datum schöner formatieren
          data[i].last_change = this.formatDate(data[i].last_change);   // Datum schöner formatieren
          data[i].status === 'open' ? this.elements_open.push(data[i]) : this.elements_closed.push(data[i]);
        }
      }
    }); 
  }

  createElement(): void {
    if(this.name !== "" && this.name !== undefined) {
      this.apiService.createElement(this.name, 'list', (data) => {
        if(data instanceof HttpErrorResponse) {
          console.error('Error: ', data.status, ' ', data.statusText);
          this.httpError = data;
          return;
        } else {
          this.name = '';
          const input = document.getElementById('InputNewElement') as HTMLInputElement;
          input.value = '';
          this.getElements();
        }
      });
    }
  }

  updateElement(id: string, event: any): void {
    console.log(id, event);
    let status = event.target.checked ? 'closed' : 'open';
    this.apiService.updateElement(id, status, (data) => {
      if(data instanceof HttpErrorResponse) {
        console.error('Error: ', data.status, ' ', data.statusText);
        this.httpError = data;
        return;
      } else {
        this.getElements();
      }
    });
  }

  deleteElement(id: string): void {
    this.apiService.deleteElement(id, (data) => {
      if(data instanceof HttpErrorResponse) {
        console.error('Error: ', data.status, ' ', data.statusText);
        this.httpError = data;
        return;
      } else {
        this.getElements();
      }
    });
  }

  formatDate(date: string): string {
    const newDate = new Date(date);
    const formattedDate = `${newDate.getDate().toString().padStart(2, "0")}.${(newDate.getMonth() + 1).toString().padStart(2, "0")}.${newDate.getFullYear()}, ${newDate.getHours().toString().padStart(2, "0")}:${newDate.getMinutes().toString().padStart(2, "0")} Uhr`;

    return formattedDate;
  }

}
