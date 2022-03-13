# Access Wikipedia REST API Hello World

## 1. Create angular app.

Run `ng g application example-page` to generate a new angular application. The application src will be stored in the `projects/example-page/src` directory

## 2. Crate wiki page component

Run `ng g c wiki-page --project=example-page` to generate a new angular component. The component will be stored in the `projects/example-page/src/app/wiki-page` directory


## 3. Add the magic code to following files

##### add this code to `/app/app.module.ts`

```
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WikiClientService } from 'ng-wiki-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiPageComponent } from './wiki-page/wiki-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WikiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##### add this code to `/app/app-routing.module.ts`

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiPageComponent } from './wiki-page/wiki-page.component';

const routes: Routes = [
  { path: '', component: WikiPageComponent, pathMatch: 'full'},
  { path: 'page',component: WikiPageComponent},
  { path: 'page/:title',component: WikiPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

##### add this code to `/app/wiki-page/wiki-page.component.ts`

```
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WikiClientService } from 'ng-wiki-service';
import { ActivatedRoute } from '@angular/router';

const DEFAULT_TITLE = 'home';

@Component({
  selector: 'app-wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.css']
})
export class WikiPageComponent implements OnInit {
  @ViewChild('content') content:ElementRef;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private nativeRef:ElementRef) {
    this.content = new ElementRef(nativeRef);
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadPage(params.get('title'));
    });
  }

  async loadPage(title: string | null) {
    var client = new WikiClientService(this.httpClient);
    client
      .getPageOffline(title || DEFAULT_TITLE)
      .then(page => {
        this.content.nativeElement.innerHTML = page.html || '<p>response: page.html is empty</p>';
      })
      .catch(error => console.error(error));
  }
}
```

##### add this code to `/app/wiki-page/wiki-page.component.html`

```
<div>
  <div #content>
    <ng-content></ng-content>
  </div>
</div>
```

##### add this code to `/app/wiki-page/wiki-page.component.css`

```
div.top-bar {
    background-color: #0F60FF;
    padding: 10px 10vmax;
}

div.top-bar a {
    padding-right: 20px;
    color: #FFFFFF;
    text-decoration: none;
    
}
div.app-content {
    margin: 0 10vw; 
}
```

## RUN

Run `ng serve example-page` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


![home](https://user-images.githubusercontent.com/12012140/158042452-993a4aa2-7ecb-48c6-8103-fd829b268a7d.png)

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


