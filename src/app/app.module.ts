import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { CoreComponent } from './core/core.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PulsesComponent } from './pulses/pulses.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleBarComponent } from './title-bar/title-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { RiceComponent } from './rice/rice.component';
import { HouseholdComponent } from './household/household.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    ThankYouComponent,
    AddProductComponent,
    PulsesComponent,
    SnacksComponent,
    BeautyComponent,
    ErrorComponent,
    TitleBarComponent,
    MyproductsComponent,
    RiceComponent,
    HouseholdComponent,

  ],
  imports: [
    AmplifyAuthenticatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
