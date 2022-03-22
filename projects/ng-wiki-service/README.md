# NgWiki
Service provider built for Wikipedia/Angular developers. using free and anonymously Wikipedia REST API service

> #### EDU
> - What did physicist [David Mermin](https://en.wikipedia.org/wiki/N._David_Mermin) mean by his advice, __["Shut up and calculate"](https://www.quora.com/What-did-physicist-David-Mermin-mean-by-his-advice-Shut-up-and-calculate)__? If I were forced to sum up in one sentence what the Copenhagen interpretation says to me, it would be “Shut up and calculate!”
> - __[Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman)__ was an American theoretical physicist, known for his work in the path integral formulation of quantum mechanics, the theory of quantum electrodynamics, the physics of the superfluidity of supercooled liquid helium


## NgWiki - Basic
 
### 1. Add NgWiki package to your project

  * Run `npm link ng-wiki`

### 2. Import the HttpClientModule in your code

Add HttpClientModule to imports array within your NgModule (usually located at "`src/app/app.module.ts`")

```
@NgModule({
  imports: [
    ...
    HttpClientModule
  ],
})
```

### 3. Use in your component code


#### Get specified ('Jupiter') Wikipedia page content

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