import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../modelos/tarea';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {
private readonly apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http : HttpClient) 
  { 

  }
getListadoTareas() : Observable<Tarea[]>{

  return this.http.get<Tarea[]>(this.apiUrl);
  
}

}
