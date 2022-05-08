import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.scss']
})
export class RiceComponent implements OnInit {
  rice: Array<any> = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListProducts().then((products) => {
      this.rice = products.items.filter(x => x?.category.toLowerCase().includes('rice'));
    })
  }

}
