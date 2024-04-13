import { ActivatedRouteSnapshot, CanActivate,  Router,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
    tbaL=false;
    constructor(private authService:AuthService,private router:Router,private toastr:ToastrService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | UrlTree | Promise<boolean | UrlTree> | boolean | UrlTree{
      if(localStorage.getItem('tba')){
        this.tbaL=(JSON.parse(this.authService?.decryptData(localStorage.getItem('tba') || '{}'))).isLoggedIn;
      }
      if(this.authService.isLoggedInGuard || this.tbaL){
        console.log('Access Granted...')
        this.tbaL=true;
        return true;
      }else{
        this.toastr.warning('You don\'t have permission to access this page...')
        console.log('Access Denied...')
        this.tbaL=false;
        this.router.navigate(['admin/login'])
        return false;
      }
    }
}



// export const authGuard: CanActivateFn = (route, state) => {

//   return true;
// };
