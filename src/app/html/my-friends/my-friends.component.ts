import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {

  private oneAtATime: boolean = true;
  private status: any = {
    isFirstOpen: true,
    isOpen: false
  };

  constructor() { }

  ngOnInit() {
  }

}
