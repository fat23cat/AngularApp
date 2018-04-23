import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../user';
import {UserServiceMockService} from '../user-service-mock.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input('id') id: number;
  user: User = null;

  constructor(private usersService: UserServiceMockService) {
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
