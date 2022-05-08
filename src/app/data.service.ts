import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartProducts: Array<any> = [];
  length$ = new BehaviorSubject(0);


  constructor() { }

  addproduct(product: any) {
    this.cartProducts.push(product);
    this.length$.next(this.cartProducts.length);
  }

  getProducts() {
    return this.cartProducts;
  }
}
