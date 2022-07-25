import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shop-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.scss']
})
export class RoupasComponent implements OnInit {

  public productList: any;
  public roupasFilter: any;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res

      this.roupasFilter = this.productList.filter((p: { category: string; }) => p.category == "women's clothing" || p.category == "men's clothing")

    });

  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }

}

