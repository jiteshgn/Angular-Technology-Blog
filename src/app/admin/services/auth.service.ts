import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  isLoggedInGuard:boolean=false;
  isLoggedIn$:any //?:Observable<boolean>;
  isLoggedInSession:any;

  constructor(private afAuth:AngularFireAuth,private toastr:ToastrService,private router:Router) { }

  login(email:any,password:any){
    this.afAuth.signInWithEmailAndPassword(email,password).then(logRef=>{
      this.toastr.success('Logged In Successfully');
      this.loadUser(email)
      this.loggedIn.next(true);
      this.isLoggedInGuard=true;
      this.isLoggedInSession=true;
      this.isLoggedIn$=this.isLoggedIn()
      this.router.navigate(['/admin']);
    }).catch(e=>{
      this.toastr.warning(e);
    })
  }
  loadUser(email:any){
    this.afAuth.authState.subscribe(user=>{
      // console.log(JSON.parse(JSON.stringify(user)));
      // localStorage.setItem('user',JSON.stringify(user));
      localStorage.setItem('tba',this.encryptData(JSON.stringify({"email":email,"isLoggedIn":true})))
    })
  }
  logOut(){
    this.afAuth.signOut().then(()=>{
      this.toastr.success('User Logged Out Successfully');
      // localStorage.removeItem('user');
      localStorage.removeItem('tba');
      this.loggedIn.next(false);
      this.isLoggedInGuard=false;
      this.isLoggedInSession=false;
      this.router.navigate(['/admin/login']);
    })
  }
  isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  encryptData(data: string, key?: string): string {  
    key="Secret Phrase";
    return CryptoJS.AES.encrypt(data, key).toString();
  }

  decryptData(data: string, key?: string): string {
    key="Secret Phrase";
    const bytes = CryptoJS.AES.decrypt(data, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
