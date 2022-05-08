import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product = {
    discount: "50%",
    id: "1",
    name: "Green gram",
    originalPrice: "180",
    quantity: "1Kg",
    seller: "Vaishnavi Kirana shopp",
    sellingPrice: "90",
    updatedAt: "2022-05-07T17:18:53.324Z",
    useBefore: "December 2022"
  }
  @Input() isCart: boolean = false;
  @Input() isSeller: boolean = false;
  imageMap = ["daawat rozana rice", "cadbury diarymilk", "little hearts", "mamaearth natural  bathing soap",
  "green gram", "dabur meswak toothpaste", "nourish organics amla bar", "maybelline new york fitme compact powder", "chaayos bhakarwadi", "kabuli chana", "urad dal",
  "swiss beauty eyeshadow palette", "bangal gram", "jackfruit365 flour", "santoor soap"]
  imgId: string = "99";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // console.log(this.imageMap);
    // console.log(this.imageMap[this.product.name]);
    console.log(this.product.name.toLowerCase());
    console.log(this.imageMap.indexOf(this.product.name.toLowerCase()));
    this.imgId = this.imageMap.indexOf(this.product.name.toLowerCase()) !== -1 ?  (this.imageMap.indexOf(this.product.name.toLowerCase()) + 1).toString() : "99";
  }

  add(product: any) {
    console.log(product);
    this.dataService.addproduct(product);
  }

}
