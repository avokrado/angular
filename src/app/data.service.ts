import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }

  postEndpoint(  postParams: any ): Observable<any> {
            return this.http.post( 'http://localhost/api/recepti', postParams );
    }

   getRandomRecept() {
     return this.http.get('http://localhost/api/randomRecept' );
   }
}
