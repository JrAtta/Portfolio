import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { TestimonialesComponent } from './Components/testimoniales/testimoniales.component';
import { RouterModule,  } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WorkExperianceComponent } from './Components/work-experiance/work-experiance.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialesComponent,
    WorkExperianceComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
