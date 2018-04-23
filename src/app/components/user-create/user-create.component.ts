import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Input} from '@angular/core';

import { UserService } from '../../user-service-mock.service';
import {User} from '../../user';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userService: UserService;
  buttonCaption: string;
  @Input() userId: number;

  name = '';
  username = '';
  email = '';
  phone = '';
  website = '';

  constructor(@Inject('FakeInstance') userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.buttonCaption = 'Create';

    if (this.userId !== undefined) {
      const user: User = this.userService.getUser(this.userId);
      this.name = user.name;
      this.username = user.username;
      this.email = user.email;
      this.phone = user.phone;
      this.website = user.website;

      this.buttonCaption = 'Save';
    }
  }


  debug($event) {
    $event.preventDefault();
    console.log(this.userService.getUsers());
  }

  clearAll() {
    this.name = '';
    this.username = '';
    this.email = '';
    this.phone = '';
    this.website = '';
  }

  submitUser() {
     const name = this.name;
     const username = this.username;
     const email = this.email;
     const phone = this.phone;
     const website = this.website;
     let newUser: User = {
       name,
       username,
       email,
       phone,
       website,
     };
     if ( this.userId !== undefined ) {
       const oldUser: User = this.userService.getUser(this.userId);
       newUser = {
         ...oldUser,
         ...newUser,
       };
       this.userService.saveUser(this.userId, newUser);
     } else {
       this.userService.createUser(newUser);
     }
    this.clearAll();
  }
}
