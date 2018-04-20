import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserServiceMockService {

  users: User[];

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: User[]) => this.users = data);
  }
  getUser(id: number) {
    let user: User = null;
    this.users.forEach((item) => {
      if (item.id === id) {
        user = item;
      }
    });
    return user;
  }

  createUser(user: User) {
    const id = this.users[this.users.length - 1].id + 1;
    this.users.push({
      ...user,
      id
    });
  }

  saveUser(id: number, user: User) {
    const newUserData: User = {
      id,
      ...user,
    };
    this.users.forEach((item, i) => {
      if (item.id === user.id) {
        this.users[i] = newUserData;
      }
    });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((item) => {
      return item.id === id;
    });
  }
}

