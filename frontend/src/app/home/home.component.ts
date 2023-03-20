import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_services/api-service.service';
import swal from 'sweetalert2';


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
    this.getElements();
  }


  handleInput(event: any, key: string): void {
    if(key === 'name') {
      this.name = event.target.value;
    }
    console.log(this.name);
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
          this.successMessage('Element erstellt', 'Das Element wurde erfolgreich zur Liste hinzugefügt.');
          // location.reload();
        }
      });
    }
  }

  successMessage(title: string, text: string) {
    swal.fire({
      title: title,
      text: text,
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000
    });
  }

}
