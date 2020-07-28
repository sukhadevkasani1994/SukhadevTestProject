import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentUserComponent } from './parent-user.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [{
  path: '', component: ParentUserComponent,
  children: [
    {
      path: 'registration', component: UserRegistrationComponent,
    },
    {
      path: 'login',  component: UserLoginComponent
    },
    {
      path: 'details',  component: UserDetailsComponent
    },
    {
      path: 'profile', component: UserProfileComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
