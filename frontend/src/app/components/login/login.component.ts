import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {email: '', password: ''}
  errorMessage: string = '';

  constructor(private authService:AuthService, private router:Router){}
  
  onLogin(){
    this.errorMessage = '';
    const {email, password} = this.loginData;
    this.authService.login(email, password).subscribe({
      next:(response)=>{
        const token = response.token;
        localStorage.setItem('token', token);

        this.router.navigate(['/profile'])
      },
      error:(err) => {
            this.errorMessage = 
            err.errors?.message || 'Login failed please try again.';
      },
    });
  }


}
