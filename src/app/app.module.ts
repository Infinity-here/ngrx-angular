import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './comp/component1/component1.component';
import { Component2Component } from './comp/component2/component2.component';
import { ComponentComponent } from './comp/component/component.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { taskreducer } from './ngrx/data.reducer';
import { NavComponent } from './comp/nav/nav.component';
import { AboutComponent } from './comp/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ComponentComponent,
    NavComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: taskreducer }),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
