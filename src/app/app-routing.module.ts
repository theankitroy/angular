import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './MyComponent/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { SignupComponent } from './MyComponent/signup/signup.component';
import { UserDashboardComponent } from './MyComponent/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'userdashboard',
    component: UserDashboardComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
