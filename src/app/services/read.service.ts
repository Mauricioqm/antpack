import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  SERVER: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get(this.SERVER);
  }
}
