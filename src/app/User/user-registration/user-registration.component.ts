import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserRegistration } from '../userregistration';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  formgrp: FormGroup;
  obj: UserRegistration = new UserRegistration();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formgrp = this.fb.group({
      FirstName:  ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
      LastName:  ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
      EmailId:  ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-]+\\.[a-z]|\\.[a-z]{2,4}$')]],
      MobileNum:  ['',[Validators.required, Validators.maxLength(10), Validators.pattern('^(?!0+$)((\\+91-?))?(?!0+$)[1-9][0-9]{9}$')]],
      Address:  ['', Validators.required],
      Gender:  ['', Validators.required],
      Password:  ['', [Validators.required, Validators.minLength(6)]],
      CnfPassword:  ['', Validators.required],
    },
    {
      validator: MustMatch('Password', 'CnfPassword')
  });
  }

  onclickSubmit() {

  }

}
