import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Auth from '@aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  itemsLength$ = this.dataService.length$;
  isSeller: boolean = true;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    Auth.currentUserInfo().then((x) => {
      this.isSeller = x.username === 'user3';
      if(this.isSeller) {
        this.router.navigate(['core','myproducts']);
      }
      else {
        this.router.navigate(['core','pulses']);

      }
    });

  }

}
