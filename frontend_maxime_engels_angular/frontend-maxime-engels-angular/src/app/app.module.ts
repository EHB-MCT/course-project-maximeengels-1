import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ProgramComponent } from './program/program.component';

@NgModule({
   imports: [
      BrowserModule,
      ClickOutsideModule,
      AppRoutingModule
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavigationComponent,
      HomeComponent,
      ProgramComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
