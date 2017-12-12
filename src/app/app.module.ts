import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import{MatInputModule} from '@angular/material';
import {ButtonModule,DataGridModule} from 'primeng/primeng';
import { ProductDataService } from './product-data.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'galary',component: GalaryComponent},  
  {path: 'product',component: ProductComponent},
  {path: 'contact',component: ContactComponent},
  { path: '',redirectTo: '/home',pathMatch: 'full'} 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    GalaryComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule, 
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    DataGridModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
