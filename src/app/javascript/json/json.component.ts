import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  private list: {} = [
  {
    "display": "OOP Alert",
    "url": "../oop/"
  },
  {
    "display": "JSON",
    "url": "../json/"
  },
  {
    "display": "AJAX",
    "url": "../ajax/"
  },
  {
    "display": "Papa Botulism",
    "url": "../papa-b-form/"
  }
];

  constructor() { }

  ngOnInit() {

  }

}
