import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginobj } from '../../../moduels/loginmodule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginin=new loginobj();
  router=inject(Router);
   onlogin(){
    if (this.loginin.username=="admin"&&this.loginin.password=="123456789") {
      this.router.navigate(['/main/products']);
    }else{
      alert("Invalid username or password");
    }
   }
}
