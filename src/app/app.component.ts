import { Component, ElementRef, HostListener, OnInit, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  btnVisible :boolean = false;
  loaderVisible :boolean = true;
  // @ViewChild("loader") loader! : ElementRef;

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderVisible = false;
  },2000);
}

  @HostListener('window : scroll',[])
  onWindowScroll():void{
   const viewHeight = window.scrollY ;
    this.btnVisible = viewHeight > 700
  }

  scrollUp(){
    window.scrollTo({
      top:0 ,
      behavior:'smooth'
     })
  }



}
