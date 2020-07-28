import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLogin } from '../Userlogin';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  formgrp: FormGroup;
  obj: UserLogin = new UserLogin();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formgrp = this.fb.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  onclickLogin() {

  }
}
