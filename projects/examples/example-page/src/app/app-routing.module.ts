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
