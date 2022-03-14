## NgWiki - Basics

### 1. Install NgWiki package

  * Run `npm i ng-wiki`

### 2. Import the HttpClientModule 

Add HttpClientModule to imports array within your NgModule (usually located at "`src/app/app.module.ts`")

```
@NgModule({
  imports: [
    ...
    HttpClientModule
  ],
})
```

### 3. Use in your component
```
import { Component, OnInit } from '@angular/core';
import { WikiClientService } from 'ng-wiki';

@Component({
  selector: 'app-root',
  template: '<div class="sample"><h1>{{ title }}</h1><h5>page id: {{ id }}</h5><div [innerHTML]="content"></div></div>',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title: string = 'loading';
  id: number = -1;
  content: string = '<p>loding</p>';
  
  constructor(private wikiClient: WikiClientService) {
  }

  ngOnInit(): void {
    this.wikiClient
      .getPageOffline('"Hello,_World!"_program')
      .then(page => {
        this.title = page?.title || 'Error';
        this.id = page.id;
        this.content = page?.html || '<p>No page found</p>';
      })
      .catch(err => console.error(err));
  }
}

```






