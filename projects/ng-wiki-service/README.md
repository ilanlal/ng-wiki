# NgWiki - The Service

Service provider built for Wikipedia/Angular developers. using free and anonymously Wikipedia REST API service

## Build

Run `ng build ng-wiki-service` to build the project. The build artifacts will be stored in the `dist/` directory.

### In general get page `key=Jupiter`

```
var client = new WikiClientService(this.httpClient)
      .getPageOffline('Jupiter')
      .then(page => {
          console.info('Bind the page to you dom',page);
        //someInnerHTML = page.html;
      })
      .catch(error => console.error(error));
```

##### List pages `query=Jupiter`
```
var subscription = new WikiClientService(this.httpClient)
      .setLanguageCode('en')
      .list('Jupiter')
      .then((response) => {
        response.pages.forEach(page => {
            console.info('Bind the page to you dom',page);
        });
      }).catch(error => console.error(error));
```


#### Try the [Hello World](HelloWorld.md) step by step example, create your first wikipedia page router outlet