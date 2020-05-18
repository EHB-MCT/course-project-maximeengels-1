import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    window.onscroll = () => {
      myFunction();
    };

    function myFunction() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('attrImgId').className = 'attrImg hide';
      } else {
        document.getElementById('attrImgId').className = 'attrImg';
      }

      const nav = document.querySelector('div.overlay') as any as HTMLElement;
      const width = nav.offsetWidth;
      if (width !== 0){
        document.getElementById('navOverlay').style.width = '0';
      }
    }
  }

  methods() {}

  ngOnInit() {}

  openFullProgram(): void {
    console.log('ight boom');
  }

}
