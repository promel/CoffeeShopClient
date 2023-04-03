import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  url = 'Coffee'
  constructor(private http: HttpClient) { }

  public get():Observable<Coffee[]>{
    return this.http.get<Coffee[]>(`${environment.apiUrl}/${this.url}`)
  }
}
