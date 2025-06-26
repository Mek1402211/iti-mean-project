import { Component, inject } from '@angular/core';
import { cart } from '../../../moduels/cartmodule';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartlist: cart[]=[];
http=inject(HttpClient)
ngOnInit() {
  this.getcartbycustId(379)
}
getcartbycustId(custId: number) {
  return this.http.get<cart[]>("http://localhost:4000/cart/search?custId="+custId).subscribe(
    (res:any) => {
      this.cartlist = res.data;
      console.log(this.cartlist)
    }
  )
}
deleteformcart(id:any){
  return this.http.delete("http://localhost:4000/cart/delete/"+id).subscribe(
    (res:any) => {
      if(res){
        alert("product deleted")
      console.log(res.data)
      }else{
        alert("product not deleted")
        console.log(res.message)
      }
    }
  )
}
}
