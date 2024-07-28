import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CardsComponent } from './cards/cards.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from 'services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    IndexComponent,
    NavbarComponent,
    TablesComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    AccountSettingsComponent,
    CardsComponent,
    FormLayoutsComponent,
    IconsComponent,
    TypographyComponent,
    AppbarComponent,
    ClientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ServiceService, ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
