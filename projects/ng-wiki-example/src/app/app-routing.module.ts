import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiGridListComponent } from './components/wiki-grid-list/wiki-grid-list.component';
import { WikiPageComponent } from './components/wiki-page/wiki-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/list/', pathMatch: 'full'},
  {
    path: 'list/:slug',
    component: WikiGridListComponent
  },
  {
    path: 'list',
    component: WikiGridListComponent
  },
  {
    path: 'page',
    component: WikiPageComponent
  },
  {
    path: 'page/:title',
    component: WikiPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
