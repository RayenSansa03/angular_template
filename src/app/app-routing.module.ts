import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { A1Component } from './a1/a1.component';

import { A2Component } from './a2/a2.component';
import { IndexComponent } from './index/index.component';
import { TablesComponent } from './tables/tables.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CardsComponent } from './cards/cards.component';
import { IconsComponent } from './icons/icons.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TypographyComponent } from './typography/typography.component';
import { ErrorComponent } from './error/error.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { AppbarComponent } from './appbar/appbar.component';


const routes: Routes = [

  { path: 'A1', component: A1Component },
  { path: 'A2', component: A2Component },
  { path: 'appbar', component: AppbarComponent },
  { path: 'index', component: IndexComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'form-layouts', component: FormLayoutsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Navbar', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'typography', component: TypographyComponent },
  { path: '', redirectTo: '/index' , pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }