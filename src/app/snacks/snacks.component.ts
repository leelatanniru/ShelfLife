import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit {
  snacks: Array<any> = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListProducts().then((products) => {
      this.snacks = products.items.filter(x => x?.category.toLowerCase() === 'snacks')
    })
  }

}
