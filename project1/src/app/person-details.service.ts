import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  constructor(private http: HttpClient) { }

  private x: string = '/assets/JSON/persons.json';

  getData(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.x)
  }
}
