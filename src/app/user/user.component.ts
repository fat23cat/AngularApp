import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../user';
import { UserService } from '../user-service-mock.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [HttpClient]
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(@Inject('FakeInstance') private usersService: UserService) {
  }

  ngOnInit() {
    this.usersService.dataUpdated.subscribe(
      () => {
        this.users = this.usersService.getUsers();
      }
    );
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }



}
