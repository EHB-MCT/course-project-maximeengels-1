import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav(): void {
    console.log('ight boom');
    document.getElementById('navOverlay').style.width = '60%';
  }

}
