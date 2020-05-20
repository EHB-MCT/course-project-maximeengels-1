import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.css']
})
export class PracticalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDropdown(): void {
    if (document.getElementById('dropdownContent').style.opacity === '0'){
      document.getElementById('dropdownContent').style.opacity = '1';
    } else {
      document.getElementById('dropdownContent').style.opacity = '0';
    }
  }
}
