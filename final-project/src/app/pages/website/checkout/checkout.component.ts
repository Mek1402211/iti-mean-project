import { Component, Inject } from '@angular/core';
import { cart } from '../../../moduels/cartmodule';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartlist: cart[] = [];
  total:Number=0;
  constructor(private http: HttpClient) {
    this.getcartbycustId(379)

   }
  getcartbycustId(custId: number) {
    return this.http.get<cart[]>("http://localhost:4000/cart/search?custId="+custId).subscribe(
      (res:any) => {
        this.cartlist = res.data;
        this.total=this.gettotel()
        console.log(this.cartlist)
      }
    )
  }
  gettotel(){
    let totel:Number = 0;
    for (let index = 0; index < this.cartlist.length; index++) {
      totel =+ this.cartlist[index].productPrice;
    }
    return totel
  }
}
