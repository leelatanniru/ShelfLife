import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.scss']
})
export class MyproductsComponent implements OnInit {
  myproducts: Array<any> = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListProducts().then((products) => {
      this.myproducts = products.items.filter(x => x?.seller.toLowerCase() === "star supermarket")
    })
  }

}
