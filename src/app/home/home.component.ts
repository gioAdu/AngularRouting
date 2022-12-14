import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logInStatus = 'You are not logged in'

  constructor(private router:Router,  private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id:number){
    this.router.navigate(['/servers',id,'edit'],{queryParams: {allowEdit:'1'},fragment:'loading'})
  }

  onLogIn(){
    this.authService.logIn()
    this.logInStatus = 'You are logged in'
  }

  onLogOut(){
    this.authService.logOut()
    this.logInStatus = 'You are not logged in'
  }
}
