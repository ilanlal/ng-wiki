import { Component, OnInit } from '@angular/core';
import { WikiClientService, WikiPage } from 'ng-wiki';
import { Subscription } from 'rxjs';

const DEFAULT_QUERY = 'Main_Page';

@Component({
  selector: 'app-wiki-search-list',
  templateUrl: './wiki-search-list.component.html',
  styleUrls: ['./wiki-search-list.component.css']
})


export class WikiSearchListComponent implements OnInit {
  query: string | undefined;
  subs: Subscription | any;
  pages: WikiPage[] = [];
  langs: string[] = ['en','fr','es','de','ru'];
  selectedLang = 'en';
  constructor(public wikiClient:WikiClientService) {

  }

  async ngOnInit() {
    this.search();
  }

  async search() {
    this.pages = [];
    this.wikiClient
      .setLanguageCode(this.selectedLang)
      .list(this.query || DEFAULT_QUERY,10)
      .then((response) => {
        console.log(response);

        response.pages.forEach(page => {
          this.addPage(page)
        });

        //const page = response.pages[0];
      }).catch(error => console.error(error));
  }

  addPage(page: WikiPage) {
    this.pages.push(page);
    return this;
  }

}
