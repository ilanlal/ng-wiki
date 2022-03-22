import { Component, OnInit } from '@angular/core';
import { WikiClientService } from 'ng-wiki'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'loading';
  id: number = -1;
  content: string = '<p>loding</p>';
  constructor(public wikiClient: WikiClientService) {
    console.log('%c Hi...','color:green')
  }

  ngOnInit(): void {
     this.wikiClient
       .fetchPageOffline('Jupiter')
       .then(page => {
         this.title = page?.title || 'Error';
         this.id = page.id;
         this.content = page?.html || '<p>No page found</p>';
       })
       .catch(err => console.error(err));
  }
}
