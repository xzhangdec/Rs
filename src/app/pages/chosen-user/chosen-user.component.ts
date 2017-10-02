import { Component,OnInit} from '@angular/core';
import { UserService }   from '../../shared/user.service';

import {ActivatedRoute, Router} from "@angular/router";

import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {

  selectedUser;
  private subscribe:Subscription = new Subscription();
  applicationId;


  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscribe = this.activatedRoute.queryParams.subscribe((queryParams)=>{
      this.applicationId = queryParams['id'];
      this.selectedUser = this.userService.getUserById(queryParams['id']).subscribe((user) => this.selectedUser = user);
    });
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  backToUserList(){
    this.router.navigate(['/user']);
  }

}
