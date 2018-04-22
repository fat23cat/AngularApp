import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

import { UserServiceMockService } from './user-service-mock.service';


@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: 'FakeInstance', useClass: UserServiceMockService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
