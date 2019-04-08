import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE } from './firebase.config';


import { AppComponent } from './app.component';
import { EditComponent } from './cliente/edit/edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularFireModule.initializeApp(FIREBASE)],
  declarations: [AppComponent, EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
