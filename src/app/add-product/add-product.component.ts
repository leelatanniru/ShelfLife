import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';
import {APIService} from '../API.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public createForm: FormGroup;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private api: APIService) {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      quantity: ["", Validators.required],
      originalPrice: ["", Validators.required],
      sellingPrice: ["", Validators.required],
      seller: ["", Validators.required],
      useBefore: ["", Validators.required],
      discount: ["", Validators.required],
      category: ["", Validators.required]
    });
   }

  ngOnInit(): void {

  }

  public onCreate(data: any) {
    this.api.CreateProduct(data).then(event => {
      console.log(event);
      this._snackBar.open('Product added successfully!', 'OK', {
        duration: 5000
      });
    })
    .catch(e => {
      console.log('error creating restaurant...', e);
    });

  }

}
