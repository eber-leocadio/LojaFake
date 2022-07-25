import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shop-joias',
  templateUrl: './joias.component.html',
  styleUrls: ['./joias.component.scss']
})
export class JoiasComponent implements OnInit {

  public productList: any;
  public joiasFilter: any;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res

      this.joiasFilter = this.productList.filter((p: { category: string; }) => p.category == "jewelery")

    });
  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }

}
