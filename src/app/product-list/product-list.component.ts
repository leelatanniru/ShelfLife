import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<any> = [];
  @Input() isCart: boolean = false;
  @Input() isSeller: boolean = false;

  constructor() { }


  ngOnInit(): void {
    console.log(this.products);
  }

}
