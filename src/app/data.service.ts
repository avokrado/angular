import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }

   getRecepti () {
     const body = {
       'sestavine' : [
         'Piscanec',
         'Krompir'
       ]
     };
     return this.http.post('http://localhost/api/recepti', body );
   }
}
