import { Injectable } from '@angular/core';

@Injectable()
export class ResumeService{
  laodProgrammingSkills(): string[]{
    return["Angular 2", "HTML", "CSS", "Javascript", "JQuery", "NodeJS", "Java", "Android (Java)", "iOS (Swift)"];
  }

  loadBusinessSkills(): string[]{
    return["Management", "Leadership/Team Building", "Sales Management", "Inventory Management", "Sales", "Customer Service", "Microsoft Office"];
  }
}
