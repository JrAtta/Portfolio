import { Injectable } from '@angular/core';
import { Iproject } from '../iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

   projects: Iproject[] = [
    {
      image: './assets/images/Screenshot (150).png',
      projectName: 'Heka store E-commerce ',
      projectDet:
        'Developed a responsive e-commerce platform  allowing users to browse products, manage shopping carts, and complete secure online payments. Implemented product filtering, search,user authentication, and an admin dashboard for managing inventory and orders.',
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/Bootstrap.png',
        './assets/images/ts.png',
        './assets/images/angular.png',
      ],
      projectLink:
        'https://heka-store-e-commerce-git-main-jrattas-projects.vercel.app/',
    },

    {
      image: './assets/images/movie.png',
      projectName: 'simple movie app with api',
      projectDet:
        'Enjoy watching the best and latest war, comedy and science fiction movies in high quality up to 4K.',
      skills: [
        './assets/images/html.png',
        './assets/images/css.png',
        './assets/images/js.png',
      ],
      projectLink: 'https://movie-app-iota-azure.vercel.app/',
    },

    {
      image: './assets/images/techSummit.png',
      projectName: 'Tech Summit',
      projectDet:
        'The Tech Summit website is a modern, single-page promotional site, built using HTML, CSS, and JavaScript. It advertises a technology conference or event, featuring engaging visuals, clear information sections, and a professional aesthetic.',
      skills: [
        './assets/images/html.png',
        './assets/images/css.png',
        './assets/images/tailwindcss.png',
        './assets/images/js.png',
      ],
      projectLink: 'https://tech-summit-umber.vercel.app/',
    },

    {
      image: './assets/images/ERP2.png',
      projectName: 'ERP Analytics Dashboard ',
      projectDet:
        'A dynamic web application for visualizing complex business data through interactive charts and real-time analytics, streamlining decision-making processes.',
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/Bootstrap.png',
        './assets/images/ts.png',
        './assets/images/angular.png',
        './assets/images/plotly.png',
      ],
      projectLink: 'https://dashboard-erp-gp.vercel.app/',
    },

    {
      image: './assets/images/ecomerce.png',
      projectName: 'exclusive e-commerce',
      projectDet:
        "An amazing store that contains most of the things you might need in your normal day and includes more than one section such as clothes, electronics, children's toys, and others. It was built using the latest technologies used with Framework Angular.",
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/ts.png',
        './assets/images/Bootstrap.png',
        './assets/images/angular.png',
      ],
      projectLink: 'https://exclusive-ecommerce-tau.vercel.app/',
    },

    {
      image: './assets/images/Artisan-Kitchen.png',
      projectName: 'Artisan Kitchen',
      projectDet:
        'Artisan Kitchen is a visually appealing, single-page website built with HTML, CSS, and JavaScript. It’s designed as a promotional site for a restaurant, café, or artisan food brand. The site combines strong imagery, modern typography, and a clean layout to create an inviting experience for visitors.',
      skills: [
        './assets/images/html.png',
        './assets/images/css.png',
        './assets/images/tailwindcss.png',
        './assets/images/js.png',
      ],
      projectLink: 'https://artisan-kitchen.vercel.app/',
    },

    {
      image: './assets/images/traffic.png',
      projectName: 'Traffic Monitor Dashboard',
      projectDet:
        'The Traffic Dashboard is a single-page web application built using HTML, CSS, and JavaScript. It presents traffic analytics in an attractive and modern dashboard layout, suitable for data monitoring and reporting.',
      skills: [
        './assets/images/html.png',
        './assets/images/css.png',
        './assets/images/tailwindcss.png',
        './assets/images/js.png',
      ],
      projectLink: 'https://traffic-dashboard-six.vercel.app/',
    },

    {
      image: './assets/images/yellowMoon.png',
      projectName: 'the yellow side of moon',
      projectDet:
        'Welcome to Yellow Side of the Moon, where we do some creative work!!! We do some art, we develop some apps.',
      skills: ['./assets/images/html.png', './assets/images/css.png'],
      projectLink: 'https://yellow-moon-sage.vercel.app/',
    },
    // {
    //   image: './assets/images/AI.png',
    //   projectName: 'simple clone _ neura',
    //   projectDet:
    //     'Start Your AI Go Journey With Us with Advanced Machine Learning Techniques AI like Artifacia Sensitivo AI Artificial Intelligence ;  is a branch of computer science that focuses on the development of intelligent machines',
    //   skills: [
    //     './assets/images/html.png',
    //     './assets/images/css.png',
    //     './assets/images/Bootstrap.png',
    //   ],
    //   projectLink: 'https://neura-seven.vercel.app/',
    // },

    // {
    //   image: './assets/images/audio.png',
    //   projectName: 'Responsive audiophile site ',
    //   projectDet:
    //     'bringing you the best audio gear, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.',
    //   skills: ['./assets/images/html.png', './assets/images/css.png'],
    //   projectLink: 'https://audiophile-sooty-three.vercel.app/',
    // },
    // {
    //   image: './assets/images/galleria.png',
    //   projectName: 'awesome gallery for best paintings',
    //   projectDet:
    //     'A very wonderful gallery that reflects the beauty of design and simplicity and is also responsive to all devices, includes the best and most beautiful amazing paintings in history by the best painters.',
    //   skills: ['./assets/images/html.png', './assets/images/css.png'],
    //   projectLink: 'https://galleria-ruby.vercel.app/',
    // },
    // {
    //   image: './assets/images/Screenshot (151).png',
    //   projectName: 'kasper template has some arts',
    //   projectDet:
    //     'Kasper is a multi-purpose HTML template for agencies and startups. It comes with a very clean and creative design, fully responsive, and ready to be customized to your needs.',
    //   skills: ['./assets/images/html.png', './assets/images/css.png'],
    //   projectLink: 'https://kasper-two-alpha.vercel.app/',
    // },
  ];
}
