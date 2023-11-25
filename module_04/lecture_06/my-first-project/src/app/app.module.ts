import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from "@angular/material/core";

import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
