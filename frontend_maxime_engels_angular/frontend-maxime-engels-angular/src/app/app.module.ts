import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavigationComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ClickOutsideModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
