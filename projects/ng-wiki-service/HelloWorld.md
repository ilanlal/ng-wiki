# NgWiki - Quic Start

Service provider built for Wikipedia/Angular developers. using free and anonymously Wikipedia REST API service

## Quick Start
### 1. Install

Run `npm i ng-wiki`

### 2. Crate wiki page component

Run `ng g c wiki-page` to generate a new angular component. The component will be stored in the `src/app/wiki-page` directory

### 3. Add the magic code to following files

Add HttpClientModule to imports array within your NgModule (usually located at "`src/app/app.module.ts`")

```
@NgModule({
  imports: [
    ...
    HttpClientModule
  ],
})
```

#### Copy this code to `src/app/wiki-page.component.ts`

```
import { Component, OnInit } from '@angular/core';
import { WikiClientService } from 'ng-wiki';

@Component({
  selector: 'app-root',
  template: './app.component.html',
  styleUrls: ['./app.component.css']
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

#### Copy this code to `src/app/wiki-page.component.html`

```
<div class="sample">
    <h1>{{ title }}</h1>
    <h5>page id: {{ id }}</h5>
    <div [innerHTML]="content">
    </div>
</div>
```

#### Copy this code to `src/app/wiki-page.component.css`

```
div.sample {
    margin: 0 10vw;
}
```

## RUN

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


![home](https://user-images.githubusercontent.com/12012140/158042452-993a4aa2-7ecb-48c6-8103-fd829b268a7d.png)



