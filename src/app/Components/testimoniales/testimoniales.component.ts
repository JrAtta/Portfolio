import { OwlOptions } from './../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimoniales',
  templateUrl: './testimoniales.component.html',
  styleUrl: './testimoniales.component.scss'
})
export class TestimonialesComponent  {

  testimonialsList:Itestimonials[] = [
    {
      description:"Collaborating with Ibrahim was a seamless experience. His expertise in web development, problem-solving mindset, and ability to deliver high-quality projects on time made a significant impact. If you're looking for a skilled frontend developer who understands both design and functionality, Ibrahim is the perfect choice!",
      image:'./assets/images/Michael Johnson.jpg',
      name:'Michael Johnson',
      jobTitle:' Senior Business Consultant'
    },
    {
      description:"Ibrahim’s attention to detail and commitment to excellence in web development are remarkable. He brings innovative solutions to the table and ensures that every project meets modern standards. His work on UI/UX and frontend development is truly outstanding.",
      image:'./assets/images/mahmoud Rafat.jpg',
      name:'mahmoud Rafat',
      jobTitle:' Tech Lead & Software Engineer'
    },
    {
      description:"Working with Ibrahim was an absolute pleasure. His ability to translate business needs into functional, user-friendly web applications is impressive. He is proactive, creative, and highly skilled in Angular and frontend technologies. I highly recommend him for any web development project!",
      image:'./assets/images/David Williams.jpg',
      name:'David Williams',
      jobTitle:'CEO at Digital Solutions'
    },
  ]

      customOptions:OwlOptions = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        mouseDrag:false,
        autoplay: true,
        autoplaySpeed:2000,
        autoplayTimeout: 2051,
        autoplayHoverPause: true,
        // smartSpeed: 1000,
        slideTransition: 'linear',
        center:true,
        responsive: {
          0: {
            items: 1
          },

          740: {
            items: 2
          },
          940: {
            items: 3
          }
        },
  }

}

interface Itestimonials  {
  description:string,
  image:string,
  name:string,
  jobTitle:string,
}