import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email= '';
  password= '';
 
  
  constructor(private authService: AuthService) { }
 
  Login(){
    this.authService.login(this.email, this.password)
  }
  ngOnInit(): void {
  }
  
  
}
