import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {User} from '../../user';
import { UserService } from '../../user-service-mock.service';
import {UserCreateComponent} from '../user-create/user-create.component';



@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {

  users: User[] = null;
  constructor(@Inject('FakeInstance') private usersService: UserService, public dialog: MatDialog) {
  }

  showCreateUser(): void {
      this.dialog.open(UserCreateComponent, {
          width: '250px',
        }
      );
  }

  ngOnInit() {
    this.usersService.dataUpdated.subscribe(
      () => {
        this.users = this.usersService.getUsers();
      }
    );
  }

}
