import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URI_PRODUCTS_BANCKEND = 'http://localhost:5000/api/products'
  currentProduct: Product
  products: any

  constructor(public http: HttpClient) {
    this.currentProduct = new Product()
  }
  getProducts(){
    return this.http.get(`${this.URI_PRODUCTS_BANCKEND}/get-all`)
  }

  createProduct(data: any){
    return this.http.post(`${this.URI_PRODUCTS_BANCKEND}/create`, data)
  }

  updateProduct(id: string, data: any){
    return this.http.put(`${this.URI_PRODUCTS_BANCKEND}/update/${id}`, data)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.URI_PRODUCTS_BANCKEND}/delete/${id}`)
  }

}
