import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatExpansionModule, MatPaginatorModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AdminService} from './admin.service';
import {UserService} from '../user.service';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent}, // url 경로는 : /admin/home
      {path: 'news', component: NewsComponent}
    ]}
];

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [AdminService],
})
export class AdminModule { }
