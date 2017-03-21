import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oop',
  templateUrl: './oop.component.html',
  styleUrls: ['./oop.component.css']
})
export class OopComponent implements OnInit {

  private person: any = {};


  constructor() { }

  ngOnInit() {
    this.getFullName();
  }


  getFullName(){
    this.person.firstName = "Rob";
    this.person.lastName = "Kuhlman";
    this.person.age = 29;
    this.person.job = "Junior Software Enginneer";

    alert(this.person.firstName + " " + this.person.lastName + " " + this.person.age + " " + this.person.job);
  }


}
