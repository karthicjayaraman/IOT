import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {

  bodyClasses = 'skin-blue layout-boxed sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

   constructor() {
  }

  ngOnInit() {

      this.body.classList.add('skin-blue');
      this.body.classList.add('layout-boxed');
      this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('layout-boxed');
    this.body.classList.remove('sidebar-mini');
  }


}
