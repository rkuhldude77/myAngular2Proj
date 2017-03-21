import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  private frameSite: string = "";
  private trustedUrl: SafeUrl;

  private sites: {} = [
    {
      "display": "Learn HTML",
      "url": "http://www.w3schools.com/html/default.asp"
    },
    {
      "display": "Learn CSS",
      "url": "http://www.w3schools.com/css/default.asp"
    },
    {
      "display": "Learn JavaScript",
      "url": "http://www.w3schools.com/js/default.asp"
    },
    {
      "display": "Learn JSON",
      "url": "http://www.w3schools.com/json/default.asp"
    },
    {
      "display": "Learn AJAX",
      "url": "http://www.w3schools.com/ajax/default.asp"
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.frameSite = "https://www.w3schools.com/default.asp";
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.frameSite);
  }

  getUrl(id){
    this.frameSite = id;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.frameSite);
    console.log(this.frameSite);
  }

}
