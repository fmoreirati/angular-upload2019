import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FIREBASE } from './firebase.config';

import { AppComponent } from './app.component';
import { EditComponent } from './cliente/edit/edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  declarations: [AppComponent, EditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
