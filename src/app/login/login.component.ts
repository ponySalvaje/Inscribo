import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string = "";
  public password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('email: ', this.email);
    console.log('password: ', this.password);
    this.router.navigate(['/dashboard', {}]);
  }

}
