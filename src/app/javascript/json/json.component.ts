import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  private output = "";
  private list: {} = [
  {
    "display": "OOP Alert"
  },
  {
    "display": "JSON"
  },
  {
    "display": "AJAX"
  },
  {
    "display": "Papa Botulism"
  }
];

  constructor() { }

  ngOnInit() {
    this.createList(this.list);
  }

  createList(list){
    let i;
    for (i = 0; i < list.length; i++)
    {
      this.output += '<li>' +
        list[i].display + '</li>';
    }
    console.log(this.output);
    return this.output;
  }

}
