import { Component } from '@angular/core';
import { AuthService } from '../../admin/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  userEmail:any; //string;
  isLoggedIn$:any //?:Observable<boolean>;

  constructor(private authService:AuthService){}

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
}
