import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { LoginComponent } from './admin/auth/login/login.component';
import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AllPostComponent } from './admin/posts/all-post/all-post.component';
import { NewPostComponent } from './admin/posts/new-post/new-post.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AdminHeaderComponent } from './admin/layouts/admin-header/admin-header.component';

// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentListComponent,
    CommentFormComponent,
    AboutUsComponent,
    PostCardComponent,

    
    LoginComponent,
    SubscribersComponent,
    DashboardComponent,
    AllPostComponent,
    CategoriesComponent,
    AllPostComponent,
    NewPostComponent, 

    AppComponent, AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
