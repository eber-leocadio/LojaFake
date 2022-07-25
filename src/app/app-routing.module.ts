import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EletronicsComponent } from './shared/components/eletronics/eletronics.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { RoupasComponent } from './shared/components/roupas/roupas.component';
import { JoiasComponent } from './shared/components/joias/joias.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'eletronics', component: EletronicsComponent },
  { path: 'roupas', component: RoupasComponent },
  { path: 'joias', component: JoiasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
