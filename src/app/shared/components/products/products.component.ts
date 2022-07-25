import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public roupasList: any;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;

    })



    console.log(this.roupasList)

  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }

}
