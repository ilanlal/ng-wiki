## Hello World Step by Step
### Create your first Wikipedia page in angular

### Build your local `dist/` directory
Run `ng build ng-wiki-service` to build the project. The build artifacts will be stored in the `dist/` directory.

### Create angular app with wiki page component
Run `ng g application example-list-material` to generate a new angular application. 
 

The application src will be stored in the `projects/example-list-material/src` directory

Run `ng add @angular/material --project=example-list-material` command to install Angular Material
the Component Dev Kit (CDK), Angular Animations and ask you the following questions to determine which features to include:
 * Choose any prebuilt theme name, or "custom" for a custom theme: (ANY)
 * Set up global Angular Material typography styles? Yes.
 * Set up browser animations for Angular Material? Yes.

Run `ng g c wiki-search-list --project=example-list-material` to generate a new angular component. The component will be stored in the `projects/example-list-material/src/app/wiki-search-list` directory

## Page component example

`projects/example-list-material/src/app/wiki-search-list/app.module.ts`

`projects/example-list-material/src/app/app-routing.module.ts`

`projects/example-list-material/src/app/wiki-search-list/wiki-search-list.component.ts`

`projects/example-list-material/src/app/wiki-search-list/wiki-search-list.component.html`

`projects/example-list-material/src/app/wiki-search-list/wiki-search-list.component.css`
## Development server

Run `ng serve example-list-material` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.