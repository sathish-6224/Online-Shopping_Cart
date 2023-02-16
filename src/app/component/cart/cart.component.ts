import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
public products :any=[];
public grandTotal !:number;

constructor(private cartservice:CartService)
{}
ngOnInit(): void{
  this.cartservice.getProducts()
  .subscribe(res=>{
    this.products=res;
    this.grandTotal=this.cartservice.getTotalPrice();
  })
}
removeItem(item: any)
{
this.cartservice.removeCartItem(item)
}
emptycart()
{
  this.cartservice.removeAllCart();
}
}
