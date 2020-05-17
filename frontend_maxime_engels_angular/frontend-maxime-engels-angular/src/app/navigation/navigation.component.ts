import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {}

  closeNav(e: Event): void {
    let nav = document.querySelector('div.overlay');
    let width = nav.offsetWidth;
    console.log(width);
    if (width !== 0){
      console.log('outside click');
      document.getElementById('navOverlay').style.width = '0';
    }
  }

}
