import { NgFor, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { product } from '../../../moduels/productmodule';

@Component({
  selector: 'app-catgoryproducts',
  standalone: true,
  imports: [NgForOf,RouterOutlet],
  templateUrl: './catgoryproducts.component.html',
  styleUrl: './catgoryproducts.component.css'
})
export class CatgoryproductsComponent implements OnInit{
  activatecategoryid:Number=0;
  realcatgoryid:Number=0;
  catgory:any;
  products:product[]=[];
  constructor(private activateroute:ActivatedRoute,private http:HttpClient){
    
  }

  router=inject(Router)
  ngOnInit(){
    this.realcatgoryid=this.activateroute.snapshot.params['id']
    console.log(this.realcatgoryid);
    this.getcatgorybyid();
  }
  getcatgorybyid(){
    return this.http.get('http://localhost:4000/catgoreys/one/'+this.realcatgoryid).subscribe(data=>{
      this.catgory=data
      this.activatecategoryid=this.catgory.categoryId
      console.log(this.activatecategoryid)
      this.serchebycatgory()
      //this.router.navigate([`/products/:${this.catgory}`])
    })
  }
  serchebycatgory(){
    return this.http.get<product[]>('http://localhost:4000/products/serche?categoryId='+this.activatecategoryid).subscribe((data:any)=>{
        this.products=data.data
        console.log(this.products)
        
    })
  }
}
