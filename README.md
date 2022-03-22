# NgWiki - Quic Start

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
```
@NgModule({
  imports: [
    ...
    HttpClientModule
  ],
  providers: [WikiClientService]
})
```

#### Copy this code to `src/app/wiki-page.component.ts`

```
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
    console.log('%c Hi...','color:green')
  }

  ngOnInit(): void {
     this.wikiClient
       .getPageOffline('Jupiter')
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
    <ul>
        <title>EDU</title>
        <li> <a href="https://en.wikipedia.org/wiki/Richard_Feynman">Richard Feynman</a> was an American theoretical
            physicist, known for his work in the path integral formulation of quantum mechanics, the theory of quantum
            electrodynamics, the physics of the superfluidity of supercooled liquid helium</li>
            <li> <a href="https://en.wikipedia.org/wiki/N._David_Mermin">David Mermin</a>  If I were forced to sum up in one sentence what the Copenhagen interpretation says
                to me, it would be “Shut up and calculate!”</li>
    </ul>

    <hr />
    <h1>{{ title }}</h1>
    <h5>page id: {{ id }}, lang: {{ wikiClient.languge_code }}</h5>
    <div [innerHTML]="content">
    </div>
</div>
```

#### Copy this code to `src/app/wiki-page.component.css`

```

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

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.




