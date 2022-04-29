# NgWiki - Quick Start

### My first goal in this project is to complete the full life cycle, of an [Open-source software (OSS)](https://en.wikipedia.org/wiki/Open-source_software)

1. Create new branch
2. Commit 
3. Merge & pull request

Service provider built for Wikipedia/Angular developers. using free and anonymously Wikipedia REST API service

> Welcome to the next day of the first week of our lives!

## Quick Start
### 1. Install with `npm`

Run `npm i ng-wiki`

### 2. Create page component

Run `ng g c wiki-page` to generate a new angular component. The component will be stored in the `src/app/wiki-page` directory

### 3. Add the magic code to following files

+ Add HttpClientModule to imports array within your NgModule (usually located at "`src/app/app.module.ts`")
+ Add WikiClientService to the providers array within your NgModule (usually located at "`src/app/app.module.ts`"
```typescript
@NgModule({
  imports: [
    ...
    HttpClientModule
  ],
  providers: [WikiClientService]
})
```

#### Copy this code to `src/app/wiki-page.component.ts`

```typescript
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
```

#### Copy this code to `src/app/wiki-page.component.html`

```html
<div class="sample">
    <ul>
        <title>EDU</title>
    </ul>

    <hr />
    <h1>{{ title }}</h1>
    <h5>page id: {{ id }}, lang: {{ wikiClient.languge_code }}</h5>
    <div [innerHTML]="content">
    </div>
</div>
```

#### Copy this code to `src/app/wiki-page.component.css`

```css

div.sample {
    background-color: #fba;
    margin: 0 10vw;
    padding: 10px;
    border: 1px inset gold;
    box-shadow: 2px 4px;
    border-radius: 2px -6px;
}

```

## RUN

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 




