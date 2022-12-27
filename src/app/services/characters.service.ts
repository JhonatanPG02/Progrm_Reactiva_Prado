import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character')
    .pipe( map( (response: any) => response.results))
  }
}
