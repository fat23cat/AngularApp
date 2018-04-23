import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  userId: number = null;

  userService: UserService;
  buttonCaption: string;


  name = '';
  username = '';
  email = '';
  phone = '';
  website = '';

  constructor(@Inject('FakeInstance') userService: UserService,
              public dialogRef: MatDialogRef<UserCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userService = userService;
    if (data !== null) {
      this.userId = data.userId;
    }
  }

  ngOnInit() {
    this.buttonCaption = 'Create';

    if (this.userId !== null) {
      const user: User = this.userService.getUser(this.userId);
      this.name = user.name;
      this.username = user.username;
      this.email = user.email;
      this.phone = user.phone;
      this.website = user.website;

      this.buttonCaption = 'Save';
    }
  }


  Cancel() {
    this.dialogRef.close();
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
     let newUserData: User = {
       name,
       username,
       email,
       phone,
       website,
     };
     if ( this.userId !== null ) {
       const oldUserData: User = this.userService.getUser(this.userId);
       newUserData = {
         ...oldUserData,
         ...newUserData,
       };
       this.userService.saveUser(this.userId, newUserData);
     } else {
       this.userService.createUser(newUserData);
     }
    this.dialogRef.close();
  }
}
