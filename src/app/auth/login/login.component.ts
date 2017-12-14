import { Component, OnInit } from '@angular/core';
import {  Routes,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  constructor(private route:Router) { }

  ngOnInit() {

  }
  loginauth(){
      if(this.userName==='admin' && this.password==='admin'){
        alert('successful');
        this.route.navigate(['/home']);
      }
      else{
        alert(' loginfailed!');
        //this.route.navigate(['/home']);
      }
  }

}
