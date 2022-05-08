import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit {
  beauty: Array<any> = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListProducts().then((products) => {
      this.beauty = products.items.filter(x => x?.category.toLowerCase().includes('beauty'))
    })
  }

}
