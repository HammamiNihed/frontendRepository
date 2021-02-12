import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/apiservice';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { UpdateProviderComponent } from './components/update-provider/update-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderDetailsComponent,
    AddProviderComponent,
    UpdateProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
