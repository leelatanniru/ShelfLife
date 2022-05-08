import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';
@Component({
  selector: 'app-pulses',
  templateUrl: './pulses.component.html',
  styleUrls: ['./pulses.component.scss']
})
export class PulsesComponent implements OnInit {
  pulses: Array<any> = [];


  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListProducts().then((products) => {
      this.pulses = products.items.filter(x => x?.category.toLowerCase() === 'pulses')
    })
  }

}
