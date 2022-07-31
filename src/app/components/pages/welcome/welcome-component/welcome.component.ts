import { AuthService } from './../../../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentSlide = 1;
  id;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.slide();
    window.addEventListener("scroll", this.reveal_left);
    window.addEventListener("scroll", this.reveal_right);
    window.addEventListener("scroll", this.reveal_top);
    window.addEventListener("scroll", this.reveal_bottom);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  slide() {
    this.id = setInterval(() => {
      this.switchToNext();
    }, 3000);
  }

  reveal_left() {
    let reveals = document.querySelectorAll(".reveal-left");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  reveal_right() {
    let reveals = document.querySelectorAll(".reveal-right");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  reveal_top() {
    let reveals = document.querySelectorAll(".reveal-top");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  reveal_bottom() {
    let reveals = document.querySelectorAll(".reveal-bottom");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


  switchToNext() {
    document.getElementById('time-bar')?.classList.remove('bar-anim');
    document.getElementById('time-bar')?.classList.add('bar-anim');
    if (this.currentSlide == 1) {
      document.getElementById('slide-1')?.classList.add('out-left');
      document.getElementById('info-1')?.classList.add('out-fade-down');
      document.getElementById('info-2')?.classList.remove('out-fade-down');
      document.getElementById('info-3')?.classList.add('out-fade-down');
      document.getElementById('slide-2')?.classList.remove('out-right');
      document.getElementById('slide-3')?.classList.add('out-right');
      document.getElementById('pb-1')?.classList.remove('active-pb');
      document.getElementById('pb-2')?.classList.add('active-pb');
      document.getElementById('pb-3')?.classList.remove('active-pb');
      this.currentSlide = 2;
      return;
    }
    if (this.currentSlide == 2) {
      document.getElementById('info-1')?.classList.add('out-fade-down');
      document.getElementById('info-2')?.classList.add('out-fade-down');
      document.getElementById('info-3')?.classList.remove('out-fade-down');
      document.getElementById('slide-1')?.classList.add('out-left');
      document.getElementById('slide-2')?.classList.add('out-left');
      document.getElementById('slide-3')?.classList.remove('out-right');
      document.getElementById('pb-1')?.classList.remove('active-pb');
      document.getElementById('pb-2')?.classList.remove('active-pb');
      document.getElementById('pb-3')?.classList.add('active-pb');
      this.currentSlide = 3;
      return;
    }
    if (this.currentSlide == 3) {
      document.getElementById('info-1')?.classList.remove('out-fade-down');
      document.getElementById('info-2')?.classList.add('out-fade-down');
      document.getElementById('info-3')?.classList.add('out-fade-down');
      document.getElementById('slide-1')?.classList.remove('out-left');
      document.getElementById('slide-1')?.classList.remove('out-right');
      document.getElementById('slide-2')?.classList.add('out-right');
      document.getElementById('slide-2')?.classList.remove('out-left');
      document.getElementById('slide-3')?.classList.add('out-right');
      document.getElementById('slide-3')?.classList.remove('out-left');
      document.getElementById('pb-1')?.classList.add('active-pb');
      document.getElementById('pb-2')?.classList.remove('active-pb');
      document.getElementById('pb-3')?.classList.remove('active-pb');
      this.currentSlide = 1;
      return;
    }
  }

  switchToPrev() {
    if (this.currentSlide == 1) {
      document.getElementById('info-1')?.classList.add('out-fade-down');
      document.getElementById('info-2')?.classList.add('out-fade-down');
      document.getElementById('info-3')?.classList.remove('out-fade-down');
      document.getElementById('slide-1')?.classList.add('out-left');
      document.getElementById('slide-2')?.classList.add('out-left');
      document.getElementById('slide-3')?.classList.remove('out-left');
      document.getElementById('slide-3')?.classList.remove('out-right');
      document.getElementById('pb-1')?.classList.remove('active-pb');
      document.getElementById('pb-2')?.classList.remove('active-pb');
      document.getElementById('pb-3')?.classList.add('active-pb');
      this.currentSlide = 3;
      return;
    }
    if (this.currentSlide == 3) {
      document.getElementById('info-1')?.classList.add('out-fade-down');
      document.getElementById('info-2')?.classList.remove('out-fade-down');
      document.getElementById('info-3')?.classList.add('out-fade-down');
      document.getElementById('slide-1')?.classList.add('out-left')
      document.getElementById('slide-2')?.classList.remove('out-left');
      document.getElementById('slide-2')?.classList.remove('out-right');
      document.getElementById('slide-3')?.classList.add('out-right');
      document.getElementById('pb-1')?.classList.remove('active-pb');
      document.getElementById('pb-2')?.classList.add('active-pb');
      document.getElementById('pb-3')?.classList.remove('active-pb');
      this.currentSlide = 2;
      return;
    }
    if (this.currentSlide == 2) {
      document.getElementById('info-1')?.classList.remove('out-fade-down');
      document.getElementById('info-2')?.classList.add('out-fade-down');
      document.getElementById('info-3')?.classList.add('out-fade-down');
      document.getElementById('slide-1')?.classList.remove('out-left');
      document.getElementById('slide-1')?.classList.remove('out-right');
      document.getElementById('slide-2')?.classList.add('out-right');
      document.getElementById('slide-2')?.classList.remove('out-left');
      document.getElementById('slide-3')?.classList.add('out-right');
      document.getElementById('slide-3')?.classList.remove('out-left');
      document.getElementById('pb-1')?.classList.add('active-pb');
      document.getElementById('pb-2')?.classList.remove('active-pb');
      document.getElementById('pb-3')?.classList.remove('active-pb');
      this.currentSlide = 1;
      return;
    }
  }

}
