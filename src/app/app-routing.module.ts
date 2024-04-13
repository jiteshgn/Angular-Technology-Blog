import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './admin/services/auth.guard';
import { LoginComponent } from './admin/auth/login/login.component';
import { AllPostComponent } from './admin/posts/all-post/all-post.component';
import { NewPostComponent } from './admin/posts/new-post/new-post.component';
import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { CategoriesComponent } from './admin/categories/categories.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category/:category/:id',component:SingleCategoryComponent},
  {path:'post/:id',component:SinglePostComponent},
  {path:'about',component:AboutUsComponent},
  {path:'terms-conditions',component:TermsAndConditionsComponent},
  {path:'contact',component:ContactUsComponent},
  
  {path:'admin',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'admin/login',component:LoginComponent},
  {path:'admin/categories',component:CategoriesComponent, canActivate:[AuthGuard]},
  {path:'admin/posts',component: AllPostComponent, canActivate:[AuthGuard]},
  {path:'admin/posts/new',component:NewPostComponent, canActivate:[AuthGuard]},
  {path:'admin/subscribers',component:SubscribersComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
