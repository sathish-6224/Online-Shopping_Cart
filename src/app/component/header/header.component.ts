import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public totalItem :number =0;
  constructor(private cartservice:CartService)
  {}
  ngOnInit() :void {
    this.cartservice.getProducts()
    .subscribe(res=>{
this.totalItem=res.length;
    })
  }

}
