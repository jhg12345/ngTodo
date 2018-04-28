import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Routes} from '@angular/router';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent}, // url 경로는 : /admin/home
      {path: 'news', component: NewsComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ],
  declarations: [IndexComponent, HomeComponent, NewsComponent]
})
export class AdminModule { }
