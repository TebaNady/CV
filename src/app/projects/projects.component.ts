import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects : Array<any> = [
    {
      img : "../../assets/img/Ebay.png",
      projectName : "Ebay",
      projectDescription : "A simulation of Ebay products page using HTML, CSS, Bootstrap and JavaScript."
    },
    {
      img : "../../assets/img/Linkedin.png",
      projectName : "Linkedin",
      projectDescription : "A simulation of Linkedin website using HTML, CSS, Bootstrap and JavaScript."
    },
    {
      img : "../../assets/img/CV.png",
      projectName : "CV",
      projectDescription : "My CV using HTML, CSS, Bootstrap, TypeScript and Angular."
    },
    {
      img : "../../assets/img/Ebay.png",
      projectName : "Ebay",
      projectDescription : "A simulation of Ebay products page using HTML, CSS, Bootstrap and JavaScript."
    },
    {
      img : "../../assets/img/Linkedin.png",
      projectName : "Linkedin",
      projectDescription : "A simulation of Linkedin website using HTML, CSS, Bootstrap and JavaScript."
    },
    {
      img : "../../assets/img/CV.png",
      projectName : "CV",
      projectDescription : "My CV using HTML, CSS, Bootstrap, TypeScript and Angular."
    }
  ]
}
