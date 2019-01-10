import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   clickMessage = '';

   login() {

    this.clickMessage = 'You are my hero!';

    alert(this.clickMessage);

    return false;

   }

  constructor() { }

  ngOnInit() {
  }

}
