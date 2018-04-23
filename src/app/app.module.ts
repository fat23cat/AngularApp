import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {UserWidgetComponent} from './user-widget/user-widget.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {UserServiceMockService} from './user-service-mock.service';


@NgModule({
  declarations: [
    AppComponent,
    UserWidgetComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [UserServiceMockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
