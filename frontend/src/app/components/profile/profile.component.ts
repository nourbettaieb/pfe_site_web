import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData:any = null;
  errorMessage = '';

  constructor(private authService: AuthService, private http: HttpClient){}

  ngOnit(): void {
    this.http.get(environment.apiURL+'/api/profile').subscribe({
      next: (response: any) =>  {},
      error: (err: any) => {
        console.error('Failed to fetch profile', err);
        this.errorMessage = 'Could not load profile data.';
      },
      
    });
  }

  onLogout(){
    this.authService.logout();
  }
}
