import { Component, OnInit } from '@angular/core';
import {ResumeService} from "./resume.service";

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  private programmingSkills: string[];
  private businessSkills: string[];

  constructor(private res: ResumeService) { }

  ngOnInit() {
    this.programmingSkills = this.res.laodProgrammingSkills();
    this.businessSkills = this.res.loadBusinessSkills();
  }

  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

}
