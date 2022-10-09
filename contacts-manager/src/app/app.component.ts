import { Component } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';
@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-manager';
  user: User;
  searchedUser!: User;

  constructor(public userService: UserService) {
    this.user = new User();
  } 

  findUser(id: number) {
    this.userService.getUser(id)
  }
  addUser() {

  }
  modifyUser() {

  }
  removeUser(id: number) {

  }
}
