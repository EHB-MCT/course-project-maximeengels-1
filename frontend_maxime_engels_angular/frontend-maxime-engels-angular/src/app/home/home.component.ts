import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    window.onscroll = () => {
      myFunction();
    };

    function myFunction() {
      console.log('scroll');
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('attrImgId').className = 'attrImg hide';
      } else {
        document.getElementById('attrImgId').className = 'attrImg';
      }
    }
  }

  methods() {}

  ngOnInit() {}

  openFullProgram(): void {
    console.log('ight boom');
  }

}
