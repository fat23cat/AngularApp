import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserServiceMockService} from '../user-service-mock.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserServiceMockService, HttpClient]
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UserServiceMockService) {
  }

  ngOnInit() {
    this.usersService.dataUpdated.subscribe(
      this.users = this.usersService.getUsers()
    );
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }


}
