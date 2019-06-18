import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_url: string = 'http://localhost:4444'

  token: string = localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : ''
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }


  constructor(private http: HttpClient) { }

  // get a product details
  details(id) {
    return this.http.get(`${this.base_url}/product/${id}`, this.httpOptions)
  }


  // get all retailer products
  all(): Observable<any> {
    return this.http.get(`${this.base_url}/product`, this.httpOptions)
  }

}