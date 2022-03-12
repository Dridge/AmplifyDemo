import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* new form imports */
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure App with AmplifyAuthenticatorModule */
    AmplifyAuthenticatorModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
