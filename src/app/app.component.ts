import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/services/auth.service';
import { AuthGuard } from './admin/services/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Tech Blog';
  isLogged=false;
  constructor(private authService:AuthService,private authGuard:AuthGuard){
    // authService.loggedIn.next(true);
    //   this.authService.isLoggedInGuard=true;
    console.log(this.authService.loggedIn,authService.isLoggedInGuard,this.authGuard.tbaL);
    (this.authGuard.tbaL ? this.isLogged=true : this.isLogged=false)
  }
  ngOnInit(){

  }
}
