import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';

// Paginacion
import {NgxPaginationModule} from 'ngx-pagination';

//Ruteo
const AppRoutes: Routes = [
  {path: '', component: UsersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( AppRoutes ),
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
