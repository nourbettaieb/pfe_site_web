import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: SignupComponent},
    {path: 'profile', component: ProfileComponent, canActivate:[authGuard]},
    {path: '**', redirectTo: 'login'},
];
