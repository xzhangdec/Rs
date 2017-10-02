import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {
  Users;

  constructor(private userService: UserService, private router: Router) { }

  getUsers() {
    return this.userService.getUsersJSON().map(users => {
      this.Users = users;
    });
  }

  ngOnInit() {
    this.getUsers().subscribe();
  }


  navToUserDetail(id) {
    console.log(id);
    this.router.navigate(['/user', id], {queryParams:{'id':id}});
  }

}
