import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrl: './work-experiance.component.scss'
})
export class WorkExperianceComponent {

  workExperianceList:IworkExperiance[]=[
    {
      image:'./assets/images/exp1.svg' ,
      title: 'frontend engineer intern',
      des: 'Assisted in the development of a web-based platform using Angular, enhancing interactivity, at DEPI.' ,
    },
    {
      image:'./assets/images/exp2.svg' ,
      title: 'full stack dev - MEAN tech' ,
      des: 'Designed and developed full website, Support all browsers using Node.js. ' ,
    },
    {
      image:'./assets/images/exp3.svg' ,
      title: 'freelance app dev project' ,
      des: 'Led the dev of a web app for a client, from initial concept to deployment on a browser. ',
    },
    {
      image:'./assets/images/exp4.svg' ,
      title: 'lead frontend developer' ,
      des: 'Developed and maintained user-facing features using modern frontend technologies.',
    },
  ]
}

interface IworkExperiance{
  image:string
  title : string ,
  des:string
}
