import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public productList: any;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api: ApiService, private cartservice: CartService) { }
  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a:any)=> {
          Object.assign(a,{quantity:1,total:a.price});
          
        });
      })
    

  }
  addtocart(item:any)
  {
this.cartservice.addtoCart(item)
  }

}
