# NgWiki

### Welcome to the next day of the first week of our life!

Service provider built for Wikipedia/Angular developers. using free and anonymously Wikipedia REST API service, Enjoy

## Build your local `dist/` directory

Run `ng build ng-wiki-service` to build the project. The build artifacts will be stored in the `dist/` directory.

## Highlights
### 1. Request wiki page by titie
```
var title = 'Jupiter';
var client = new WikiClientService(this.httpClient)
      .getPageOffline(title)
      .then(page => {
          console.info('Bind the page to you dom',page);
        //someInnerHTML = page.html;
      })
      .catch(error => console.error(error));
```

### 2. Search wiki pages by query
```
var query = 'Jupiter';
var subscription = new WikiClientService(this.httpClient)
      .setLanguageCode('en')
      .list(query)
      .then((response) => {
        response.pages.forEach(page => {
            console.info('Bind the page to you dom',page);
        });
      }).catch(error => console.error(error));
```

## Quick Start

 * ### [Wiki page outlet example](projects/example-page/README.md) step by step example.

 * ### [List with Material Example](projects/example-list-material/README.md) step by step example.

 * ### [Hello World](projects/ng-wiki-service/HelloWorld.md) step by step example, create your first wikipedia page router outlet
