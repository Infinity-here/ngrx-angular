import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
