//our root app component
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { CustomerService } from './customer.service';
import { UsersService } from './users.service';
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,HttpModule],
  declarations: [AppComponent],
  providers: [CustomerService, UsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }