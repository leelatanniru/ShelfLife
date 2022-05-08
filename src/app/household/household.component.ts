import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {
  household: Array<any> = [];
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListProducts().then((products) => {
      this.household = products.items.filter(x => x?.category.toLowerCase().includes('household'))
    })

  }

}
