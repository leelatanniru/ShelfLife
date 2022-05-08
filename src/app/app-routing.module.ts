import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@aws-amplify/ui-angular';
import { AddProductComponent } from './add-product/add-product.component';
import { BeautyComponent } from './beauty/beauty.component';
import { CartComponent } from './cart/cart.component';
import { CoreComponent } from './core/core.component';
import { HouseholdComponent } from './household/household.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { PulsesComponent } from './pulses/pulses.component';
import { RiceComponent } from './rice/rice.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [{path: '', redirectTo: '/core', pathMatch: 'full'},
{path: 'core', component: CoreComponent,
  children: [
    {
      path: 'pulses', component: PulsesComponent
    },
    {
      path: 'beauty', component: BeautyComponent
    },
    {
      path: 'snacks', component: SnacksComponent
    },
    {
      path: 'household', component: HouseholdComponent
    },
    {
      path: 'rice', component: RiceComponent
    },
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'thankyou', component: ThankYouComponent
    },
    {
      path: 'myproducts', component: MyproductsComponent
    },
    {
      path: 'addproduct', component: AddProductComponent
    }
  ]
},
{path: '**', component: ErrorComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
