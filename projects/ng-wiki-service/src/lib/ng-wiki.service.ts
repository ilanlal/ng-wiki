import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WikiPage, WikiResponse } from './ng-wiki.interfaces';

@Injectable({
  providedIn: 'root'
})

export class WikiClientService {
  limit:number=12;
  languge_code:string = 'en';

  /*****  https://www.mediawiki.org/wiki/API:REST_API/Reference#JavaScript ******/
  results: WikiPage[] = [];

  constructor(private httpClient: HttpClient) {
  }

  setLanguageCode(code:string) {
    this.languge_code = code;
    return this;
  }
  setLimit(limit:number) {
    this.limit = limit;
    return this;
  }

  async list(slug:string) {
    const promise = new Promise<WikiResponse>((resolve, reject) => {
      try {
        let url = 'https://'+ this.languge_code + '.wikipedia.org/w/rest.php/v1/search/page?limit=' + encodeURIComponent(this.limit) + '&q=' + encodeURIComponent(slug);

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

  async getPageSource(title:string) {
    const promise = new Promise<WikiPage>((resolve, reject) => {
      try {
        let url = 'https://'+ this.languge_code + '.wikipedia.org/w/rest.php/v1/page/' + encodeURIComponent(title);
        this.httpClient
          .get<WikiPage>(url)
          .subscribe((response:WikiPage) => {
            resolve(response);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });

    return promise;
  }

  async getPageBare(title:string) {
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

  async getPageOffline(title:string) {
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
