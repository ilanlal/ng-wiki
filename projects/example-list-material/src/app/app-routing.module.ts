import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiSearchListComponent } from './wiki-search-list/wiki-search-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/list/', pathMatch: 'full'},
  {
    path: 'list/:query',
    component: WikiSearchListComponent
  },
  {
    path: 'list',
    component: WikiSearchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
