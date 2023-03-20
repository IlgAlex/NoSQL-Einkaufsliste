import { Component, OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Elements } from '../elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{




  constructor(private http: HttpClient, private formbuilder: FormBuilder){
  }

  ngOnInit(): void {
    
  }

  post(): void {
        //Backend-Pfad
        const url = 'http://localhost:8080/new-element';

        //In JSON Format
        const headers = new HttpHeaders().set('Accept', 'application/json');
    
        //Bearbeitung als Post-Request
        this.http.post<Elements>(url/*, newElement*/, { headers }).subscribe({
          next: (element:any) => {
            console.log('Neuer Titel: ', element.shortHand);
            console.log(element);
          },
          error: (err) => {
            console.error('Error', err);
          }
        });
  }

  get(): void {
          //Backend-Pfad
          const url = 'http://localhost:8080/home';

          //Antwort im Json Format
          const headers = new HttpHeaders().set('Accept', 'application/json');
    
          this.http.get<Elements[]>(url, { headers }).subscribe({
            next: (element:any) => {
              console.log(element);
            },
            error: (err:any) => {
              console.error('Error', err);
            }
          });
  }

  put(): void {
    const url = 'http://localhost:8080/home';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    this.http.put<Elements>(url, { headers }).subscribe({
      next: (element:any) => {
        console.log(element);
      },
      error: (err) => {
          console.error('Error', err);
      }
    })
  }

  delete(): void {
          //Backend-Pfad
          const url = 'http://localhost:8080/home'; //Pfad anpassen

          //Antwort im json Format
          const headers = new HttpHeaders().set('Accept', 'application/json');
    
          this.http.delete<Elements>(url, { headers }).subscribe({
            next: (element:any) => {
              console.log(element);
            },
            error: (err:any) => {
              console.error('Error', err);
            }
          });
  }






}
