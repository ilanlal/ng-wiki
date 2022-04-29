import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WikiClientService } from 'ng-wiki';
import { ActivatedRoute } from '@angular/router';

const DEFAULT_TITLE = 'home';

@Component({
  selector: 'app-wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.css']
})
export class WikiPageComponent implements OnInit {
  @ViewChild('content') content:ElementRef;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private nativeRef:WikiClientService,public wikiClient:WikiClientService) {
    this.content = new ElementRef(nativeRef);
    
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadPage(params.get('title'));
    });
  }

  async loadPage(title: string | null) {
    console.info('loadPage',title);
   
    this.wikiClient
      .fetchPageOffline(title || DEFAULT_TITLE)
      .then(page => {
        this.content.nativeElement.innerHTML = page.html || '<p>response: page.html is empty</p>';
      })
      .catch(error => console.error(error));
  }
}
