import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { ClockComponent } from './components/clock/clock.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';

import { MarkdownModule } from 'ngx-markdown';
import { ComponentNameComponent } from './component-name/component-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomCursorComponent,
    ClockComponent,
    CardProfileComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
