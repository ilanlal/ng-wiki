import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiClientService, WikiPage } from 'ng-wiki-service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'wiki-grid-list',
  templateUrl: './wiki-grid-list.component.html',
  styleUrls: ['./wiki-grid-list.component.css']
})
export class WikiGridListComponent implements OnInit {
  slug: string | undefined;
  subs: Subscription | any;
  pages: WikiPage[] = [];
  selectedPage: WikiPage | any;
  listMode: boolean = true;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadPage(params.get('slug'));
    });
  }

  setSelectedPage(page: WikiPage) {
    console.info('setSelectedPage');
    //fetch or local
    if (page.html) {
      
      this.selectedPage = page;
      this.listMode = false;      
    }
  }

  cleanSelectedPage() {
    this.selectedPage = undefined;
    this.listMode = true;
  }

  getRoutLink(page: WikiPage) {
    return '/page/' + page.key;
  }

  loadPage(slug: string | null) {
    this.subs = new WikiClientService(this.httpClient)
      .list(slug || 'Main_Page')
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

  search() {
    this.pages = [];
    this.loadPage(this.slug || 'Help');
  }

  open(page: WikiPage) {
    this.subs = new WikiClientService(this.httpClient)
      .getPageOffline(page.key)
      .then(response => {
        console.info(response);
        page = response;
        this.setSelectedPage(response);
      }).catch(error => console.error(error));
  }

  close() {
    this.cleanSelectedPage();
  }
}
