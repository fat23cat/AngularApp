import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserServiceMockService} from '../user-service-mock.service';


@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {

  users: User[] = null;
  constructor(private usersService: UserServiceMockService) {
  }

  showCreateUser() {

  }

  ngOnInit() {
    this.usersService.dataUpdated.subscribe(
      () => {
        this.users = this.usersService.getUsers();
      }
    );
  }

}
