import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import { UserService } from '../../user-service-mock.service';
import {User} from '../../user';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userService: UserService;
  user: User;
  constructor(@Inject('FakeInstance') userService: UserService) {
    this.userService = userService;
  }

  debug() {
    console.log(this.userService.getUsers());
  }

  createUser(newUser: User) {
      this.userService.createUser(newUser);
  }

  ngOnInit() {

  }

}
