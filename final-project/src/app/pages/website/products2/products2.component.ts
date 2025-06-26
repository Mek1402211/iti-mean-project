import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { product } from '../../../moduels/productmodule';
import { NgFor } from '@angular/common';
import { cart } from '../../../moduels/cartmodule';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-products2',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './products2.component.html',
  styleUrl: './products2.component.css'
})
export class Products2Component implements OnInit {
  constructor(private http: HttpClient, private proserv: ProductService) { }
  allproducts: product[] = [];
  allcate: any[] = [];
  _id: number = 0;
  flage:boolean=false;
  newcart = new cart();
  addedproduct = new product();
  ngOnInit() {
    this.getallproducts()
    this.getAllcatgoreys()
    //this.getproductbyid()
  }
  addtocart(id: number) {
    this.getproductbyid(id)
  }
  getallproducts() {
    return this.http.get<product[]>("http://localhost:4000/products/all").subscribe((data) => {
      this.allproducts = data;
    })
  }
  getAllcatgoreys() {
    return this.http.get<any[]>("http://localhost:4000/catgoreys/all").subscribe(data => {
      this.allcate = data;
    });
  }
  getproductbyid(id: number) {
    return this.http.get<product>("http://localhost:4000/products/one/" + id).subscribe((res: any) => {
      this.newcart.cartId = this.generateRandomFourDigitNumber()
      this.newcart.custId = 379
      this.newcart.productId = res._id;
      this.newcart.productShortName = res.productShortName;
      this.newcart.productName = res.productName;
      this.newcart.categoryName = res.categoryName;
      this.newcart.productImageUrl = res.productImageUrl;
      this.newcart.productPrice = res.productPrice;
      this.flage=true;
      console.log(this.newcart)
      console.log(res)
      this.makenewcart()
    })
  }
  generateRandomFourDigitNumber() {
    // Generate a random integer between 1000 and 9999 (inclusive)
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    console.log(randomNumber)
    return randomNumber;
  }
  makenewcart(){
    this.http.post('http://localhost:4000/cart/addtocart', this.newcart).subscribe((data) => {
      if (data) {
        alert("product added to cart");
        this.proserv.cartUpdate$?.next(true);
      } else {
        alert("product not added to cart");
      }
    })
  }
}
