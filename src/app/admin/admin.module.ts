import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Routes} from '@angular/router';
import {MatExpansionModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

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
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  declarations: [IndexComponent, HomeComponent, NewsComponent]
})
export class AdminModule { }
