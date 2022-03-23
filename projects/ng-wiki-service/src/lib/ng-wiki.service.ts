import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgWikiInterface, WikiResponse } from './ng-wiki.interfaces';
import { WikiPage } from './ng-wiki.model';

@Injectable({
  providedIn: 'root'
})

/*****  https://www.mediawiki.org/wiki/API:REST_API/Reference#JavaScript ******/
export class WikiClientService implements NgWikiInterface {
  languge_code:string = 'en';
  
  constructor(private httpClient: HttpClient) { 
    console.log('%c Hi from WikiClientService', 'color:white, backgrouncolor:green');
  }

  setLanguageCode(code:string) {
    this.languge_code = code;
    return this;
  }

  async fetchPageList(slug:string, limit:number) {
    const promise = new Promise<WikiResponse>((resolve, reject) => {
      try {
        let url = 'https://'+ this.languge_code + '.wikipedia.org/w/rest.php/v1/search/page?limit=' + encodeURIComponent(limit) + '&q=' + encodeURIComponent(slug);

        console.info('send request', url);
        this.httpClient
          .get<WikiResponse>(url)
          .subscribe((response: WikiResponse) => {
            resolve(response);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });

    return promise;
  }

  async fetchPageSource(title:string) {
    const promise = new Promise<WikiPage>((resolve, reject) => {
      try {
        let url = 'https://'+ this.languge_code + '.wikipedia.org/w/rest.php/v1/page/' + encodeURIComponent(title);
        
        this.httpClient
          .get<WikiPage>(url)
          .subscribe((response:WikiPage) => {
            console.info(url,response);
            resolve(response);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });

    return promise;
  }

  async fetchPageBare(title:string) {
    const promise = new Promise<WikiPage>((resolve, reject) => {
      try {
        //Returns the standard page object for a wiki page, including the API route to fetch the latest content in HTML, the license, and information about the latest revision.
        let url = 'https://'+ this.languge_code + '.wikipedia.org/w/rest.php/v1/page/' + encodeURIComponent(title) + '/bare';
        this.httpClient
          .get<WikiPage>(url)
          .subscribe((response:WikiPage) => {
            console.info(url,response)
            resolve(response);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });

    return promise;
  }

  async fetchPageOffline(title:string) {
    const promise = new Promise<WikiPage>((resolve, reject) => {
      try {
        //Returns the standard page object for a wiki page, including the API route to fetch the latest content in HTML, the license, and information about the latest revision.
        let url = 'https://'+ this.languge_code + '.wikipedia.org/w/rest.php/v1/page/' + encodeURIComponent(title) + '/with_html';
        this.httpClient
          .get<WikiPage>(url)
          .subscribe((response:WikiPage) => {
            console.info(url,response)
            resolve(response);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });

    return promise;
  }
}
