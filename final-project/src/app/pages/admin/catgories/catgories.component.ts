import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {  Observable,Subscription,retry } from 'rxjs';

@Component({
  selector: 'app-catgories',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './catgories.component.html',
  styleUrl: './catgories.component.css'
})
export class CatgoriesComponent {
   allcate:any []=[];
  
   constructor(private http: HttpClient) {}
   ngOnInit(){
    this.getAllcatgoreys();
   }
  getAllcatgoreys(){
    return this.http.get<any>("http://localhost:4000/catgoreys/all").subscribe(data=>{
      this.allcate=data;
    });
  }
}
