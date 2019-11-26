import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  { providedIn : 'root'}
)
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

   getProducts() {
     //return this.http.get('http://127.0.0.1:8000/products/');
      return this.http.get('/assets/products.json');
   }
}