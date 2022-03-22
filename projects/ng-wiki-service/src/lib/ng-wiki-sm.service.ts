import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*****  https://www.mediawiki.org/wiki/API:REST_API/Reference#JavaScript ******/
export class WikiClientServiceSample {
  languge_code: string = 'en';

  setLanguageCode(code:string) {
    this.languge_code = code;
    return this;
  }
}
