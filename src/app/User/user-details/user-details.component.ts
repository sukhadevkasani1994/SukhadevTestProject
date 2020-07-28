import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [AppService]
})
export class UserDetailsComponent implements OnInit {

  arr: [] = [];
  constructor(public service: AppService) { }

  ngOnInit() {
    this.service.GetUserDetails().subscribe((data: any) => {
      this.arr = data;
    })
  }

}
