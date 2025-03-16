import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model'; // Adjust path


@Injectable({
  providedIn: 'root'
})
export class Products {
  private apiUrl = 'http://localhost:5052/api/products'; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> { // Change Products[] to Product[]
    return this.http.get<Product[]>(this.apiUrl);
  }
}

