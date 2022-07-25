import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shop-eletronics',
  templateUrl: './eletronics.component.html',
  styleUrls: ['./eletronics.component.scss']
})

export class EletronicsComponent implements OnInit {

  public productList: any;
  public electronicFilter: any;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {

    this.api.getProduct().subscribe(res => {
      this.productList = res

      this.electronicFilter = this.productList.filter((p: { category: string; }) => p.category == "electronics")

    });

  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }

}

