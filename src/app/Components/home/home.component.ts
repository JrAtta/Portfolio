import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

text: string = "Hi! I'm Ibrahim, an Angular Developer based in Cairo.";
  index: number = 0;

  // Access the h6 element with the class 'desc'
  @ViewChild('descDiv') textDiv!: ElementRef;

  ngOnInit(): void {
    // Start the typewriter effect after 1 second
    setTimeout(() => this.typeAnimation(), 1000);
  }

  typeAnimation() {
    if (this.index < this.text.length) {
      this.textDiv.nativeElement.innerHTML += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeAnimation(), 100);
    }
  }

}
