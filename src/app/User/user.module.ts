import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentUserComponent } from './parent-user.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { AppService } from '../app.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentUserComponent, UserRegistrationComponent, UserLoginComponent, UserDetailsComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [ParentUserComponent]
})
export class UserModule { }
