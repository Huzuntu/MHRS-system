import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInPagePhotoComponent } from './sign-in-page-photo/sign-in-page-photo.component';
import { SignInPageLoginComponent } from './sign-in-page-login/sign-in-page-login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignInPagePhotoComponent,
    SignInPageLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
