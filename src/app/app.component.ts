import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  btnVisible :boolean = false;

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
