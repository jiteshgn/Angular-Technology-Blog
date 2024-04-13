import { Component } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private authGuard:AuthGuard){
    if(this.authGuard.tbaL && !localStorage.getItem('tba')) window.location.reload()
  }
}
