import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    username : "",
    password : ""
  };

  constructor() { }

  onSubmit(){
    console.log(this.login);
  }

  ngOnInit(): void {
  }

}
