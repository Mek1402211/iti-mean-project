import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from '../../../moduels/productmodule';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { cart } from '../../../moduels/cartmodule';
import { Subject } from 'rxjs';
import { catgory } from '../../../moduels/catgorymodule';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router,private proserv:ProductService) {
    this.proserv.cartUpdate$?.subscribe(
      (data)=>{
        this.getcartbycustId(379)
      }
    )
  }
  allproducts: product[] = [];
  allcate: catgory[] = [];
  cartlist: cart[] = [];
  ngOnInit() {
   this.getallproducts()
   this.getAllcatgoreys()
   this.getcartbycustId(379)
  }
  onclick(item:number) {
    this.router.navigate(["/products",item])
  }
  getallproducts() {
    return this.http.get<product[]>("http://localhost:4000/products/all").subscribe((data) => {
      this.allproducts = data;
    })
  }
  getAllcatgoreys() {
    return this.http.get<catgory[]>("http://localhost:4000/catgoreys/all").subscribe((data) => {
      this.allcate = data;
    });
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
