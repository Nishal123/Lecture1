import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { PostCreateComponent } from './posts/post-create/post-create.component';

import { MatInputModule, MatCardModule,MatButtonModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule , MatInputModule,MatCardModule,MatButtonModule],
  declarations: [ AppComponent, PostCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
