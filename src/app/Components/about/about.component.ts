import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills:string[]=[
    '',
   'Angular',
    'Typescript',
    'Next.js',
  ]
  skills1:string[]=[
    'JavaScript',
    'C#',
    'Bootstrap',
    '',

  ]

  email:string = 'aee23530@gmail.com'
  copy:string = 'Copy my email address'
  copyEmail(){
    navigator.clipboard.writeText(this.email);
    this.copy = 'Email is Copied!'
  }
}
