import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule, } from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: AppComponent },
  { path: 'contacto', component: ContactoComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)

