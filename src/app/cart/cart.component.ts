import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Array<any> = [];
  subtotal = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cartItems = this.dataService.getProducts();
    console.log('cartItems', this.cartItems);
    this.subtotal = this.cartItems.reduce((a, c) => a + parseInt(c.sellingPrice), 0)
  }

}
