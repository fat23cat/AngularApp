import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {UserWidgetComponent} from './user-widget/user-widget.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { UserCreateComponent } from './components/user-create/user-create.component';

import { UserServiceMockService } from './user-service-mock.service';


@NgModule({
  declarations: [
    AppComponent,
    UserWidgetComponent,
    UserComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    { provide: 'FakeInstance', useClass: UserServiceMockService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
