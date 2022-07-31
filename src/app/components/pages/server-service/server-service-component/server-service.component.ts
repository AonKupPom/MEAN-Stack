import { ServerService } from './../../../../services/server.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-service',
  templateUrl: './server-service.component.html',
  styleUrls: ['./server-service.component.css']
})
export class ServerServiceComponent implements OnInit {

  Servers:any = []
  constructor(
    private _serverService: ServerService
  ) { }

  ngOnInit(): void {
    this._serverService.getServers().subscribe(res => {
      this.Servers = res;
    })
    window.addEventListener("scroll", this.reveal_left);
    window.addEventListener("scroll", this.reveal_right);
    window.addEventListener("scroll", this.reveal_top);
    window.addEventListener("scroll", this.reveal_bottom);

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
}
