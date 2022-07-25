import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { EletronicsComponent } from './shared/components/eletronics/eletronics.component';
import { RoupasComponent } from './shared/components/roupas/roupas.component';
import { JoiasComponent } from './shared/components/joias/joias.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    EletronicsComponent,
    RoupasComponent,
    JoiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
