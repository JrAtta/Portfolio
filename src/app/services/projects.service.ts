import { Injectable } from '@angular/core';
import { Iproject } from '../iproject';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projects: Iproject[] = [
    {
      image: './assets/images/booking-hotel.png',
      projectName: 'Hotel Booking Platform',
      projectDet:
        'A modern, high-performance hotel reservation system built with Angular 20, featuring Server-Side Rendering (SSR) for enhanced SEO and faster initial load times. The application leverages lazy loading for optimal bundle size, Angular Signals for reactive state management, and OnPush change detection strategy to maximize performance. Implemented with Reactive Forms using FormBuilder for robust form handling, styled with Angular Material and Bootstrap 5 for a responsive, professional UI. Currently operates with mock data architecture, demonstrating scalable patterns ready for API integration.',
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/Bootstrap.png',
        './assets/images/ts.svg',
        './assets/images/angular.png',
      ],
      projectLink: 'https://hotel-booking-alpha-five.vercel.app/',
    },
    {
      image: './assets/images/heka store.png',
      projectName: 'Heka store E-commerce ',
      projectDet:
        'Developed a responsive e-commerce platform  allowing users to browse products, manage shopping carts, and complete secure online payments. Implemented product filtering, search,user authentication, and an admin dashboard for managing inventory and orders.',
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/Bootstrap.png',
        './assets/images/ts.svg',
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
      image: './assets/images/ERP.png',
      projectName: 'ERP Analytics Dashboard ',
      projectDet:
        'A dynamic web application for visualizing complex business data through interactive charts and real-time analytics, streamlining decision-making processes.',
      skills: [
        './assets/images/html.png',
        './assets/images/sass.png',
        './assets/images/Bootstrap.png',
        './assets/images/ts.svg',
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
        './assets/images/ts.svg',
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
  ];
}
