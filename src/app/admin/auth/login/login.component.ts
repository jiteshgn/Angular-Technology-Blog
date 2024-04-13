import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService,private authGuard:AuthGuard){
    if(this.authGuard.tbaL && !localStorage.getItem('tba')) window.location.reload()
  }

  onSubmit(formValue:any){
    this.authService.login(formValue.email,formValue.password)
  }
}
