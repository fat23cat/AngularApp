import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../user';
import { UserService } from '../user-service-mock.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [HttpClient]
})
export class UserComponent implements OnInit, OnChanges {

  @Input('id') id: number;
  user: User = null;

  constructor(@Inject('FakeInstance') private usersService: UserService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.user = this.usersService.getUser(this.id);
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
}
