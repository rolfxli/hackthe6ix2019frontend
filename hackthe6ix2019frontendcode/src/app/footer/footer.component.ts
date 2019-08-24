import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getYear() {
    return (new Date().getFullYear());
  }

  getDate() {
    return (new Date().getTime());
  }

}
