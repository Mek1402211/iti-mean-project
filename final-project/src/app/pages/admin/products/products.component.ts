import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { product } from '../../../moduels/productmodule';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor(private http:HttpClient ){}
  product=new product;
  allproducts: product[] = [];
  allcate:any []=[];
  issidepanelvisable:boolean=false;
  ngOnInit(){
    this.getAllcatgoreys()
    this.getallproducts()
  }
  opensidepanel() {
    this.issidepanelvisable=true
  }
  clodesidepanel() {
    this.issidepanelvisable=false
  }
  onedit(pro:any){
    this.product=pro;
    this.opensidepanel()
  }
  
  onsave(){
    this.addProduct().subscribe((data:any)=>{
      if(data){
        alert('product created')
        this.getallproducts()
      }else{
        alert(data.message)
      }
    });
  }
  onupdate(){
    this.updateproduct().subscribe((data:any)=>{
      debugger;
      if(data){
        alert('product updated')
        this.getallproducts()
      }else{
        alert(data.message)
      }
    })
  }
  ondelete(pro:any){
    this.product=pro;
    const isdelete=confirm("are you sure you want to delete?")
    if (isdelete) {
      this.deleteproduct().subscribe((data:any)=>{
        debugger;
        if(data){
          alert('product deleted')
          this.getallproducts()
        }else{
          alert(data.message)
        }
      })
    }
   
  }
  getallproducts() {
    return this.http.get<product[]>("http://localhost:4000/products/all").subscribe((data)=>{
      this.allproducts=data;
    })
  }
  getAllcatgoreys(){
    return this.http.get<any>("http://localhost:4000/catgoreys/all").subscribe(data=>{
      this.allcate=data;
    });
  }
  addProduct(){
   return  this.http.post("http://localhost:4000/products/add",this.product)
  }
  updateproduct(){
    return this.http.put('http://localhost:4000/products/update/'+this.product._id,this.product)
  }
  deleteproduct(){
    return this.http.delete('http://localhost:4000/products/delete/'+this.product._id);
  }
}
