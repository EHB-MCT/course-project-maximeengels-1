import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Array<any>;

  constructor(@Inject(DOCUMENT) private document: Document,
              private databaseService: DatabaseService
    ) {
    window.onscroll = () => {
      scrollFunction();
    };

    function scrollFunction() {

      const nav = document.querySelector('div.overlay') as any as HTMLElement;
      const width = nav.offsetWidth;
      if (width !== 0) {
        document.getElementById('navOverlay').style.width = '0';
      }
    }

  }

  ngOnInit() {
    this.databaseService.getTickets()
    .then(result => {
      this.tickets = result;
      console.log(result);
    });
  }

}
