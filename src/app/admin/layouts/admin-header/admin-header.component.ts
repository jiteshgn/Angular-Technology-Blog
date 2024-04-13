import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

  userEmail:any; //string;
  isLoggedIn$:any //?:Observable<boolean>;
  isLoggedInSession2:any;

  constructor(private authService:AuthService){
    this.isLoggedInSession2=this.authService.isLoggedInSession
    console.log(this.isLoggedInSession2)
  }

  ngOnInit():void{
    if(localStorage.getItem('tba')){
      this.authService.loggedIn.next(true);
      this.authService.isLoggedInGuard=true;

      this.userEmail=(JSON.parse(this.authService.decryptData(localStorage.getItem('tba') || '{}'))).email

      this.isLoggedIn$=this.authService.isLoggedIn()
    }
  }
  onLogout(){
    this.authService.logOut();
  }
  toLogin(){

  }
}
