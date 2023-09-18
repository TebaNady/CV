import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  Skills = "I studied HTML, CSS, Bootstrap, JavaScript, Mongo Database, TypeScript and now I start studying Angular and I implement this CV by using Angular Components. All my study is in The Information Technology Institute (ITI). My Current step is studying Angular and my next step is studying React."
  mySkills : Array<any> = [
    {skillName : "HTML",rating : 100},
    {skillName : "CSS",rating : 100},
    {skillName : "Bootstrap",rating : 100},
    {skillName : "JavaScript",rating : 75},
    {skillName : "Mongo",rating : 75},
    {skillName : "TypeScript",rating : 50},
    {skillName : "Angular",rating : 25}
  ]
}
