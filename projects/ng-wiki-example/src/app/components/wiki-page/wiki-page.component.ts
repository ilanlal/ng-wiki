import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiClientService, WikiPage } from 'ng-wiki-service';

@Component({
  selector: 'wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.css']
})
export class WikiPageComponent implements AfterViewInit {
  title:string = 'help';
  //@ViewChild('content', { read: '<p>Im reading</p>', static: false }) content: ElementRef;  

  originalContent: string = '<p>loading</p>';
  controlledContent: string = '<p>loading</p>';
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private eRef: ElementRef) {
    //this.content = eRef;
    //this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }

  async ngAfterViewInit() {
      console.log('ngAfterViewInit');
      this.loadPage(this.title);
  }

  async loadPage(title: string | any) {
    var client = new WikiClientService(this.httpClient);

    client
      .getPageOffline(title || 'Main_Page')
      .then(_page => {
        this.controlledContent = this.originalContent = _page.html || '<p>response: page.html is empty</p>';
      })
      .catch(error => console.error(error));
  }
  
}
