import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  url = 'Purchase'
  constructor(private http: HttpClient) { }

  public get():Observable<Purchase[]>{
    return this.http.get<Purchase[]>(`${environment.apiUrl}/${this.url}`)
  }

  public update(purchase: Purchase):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/${this.url}`,purchase);
  }

  public add(purchase: Purchase):Observable<any>{
    return this.http.post(`${environment.apiUrl}/${this.url}`,purchase);
  }

  public delete(purchase: Purchase):Observable<any>{
   return  this.http.delete(`${environment.apiUrl}/${this.url}/${purchase.id}`);
  }
}
