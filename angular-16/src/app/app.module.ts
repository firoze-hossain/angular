import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormGroup, FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import {MyFirstService} from "./services/my-first.service";
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { ProdcutDetailsComponent } from './prodcut-details/prodcut-details.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProdcutsComponent,
    ProdcutDetailsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //providers: [],
  providers: [MyFirstService,
  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
