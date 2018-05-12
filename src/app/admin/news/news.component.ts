import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {NewsVO} from '../../domain/news.vo';
import {PageVo} from '../../domain/page.vo';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: NewsVO[] = [];
  page: PageVo;

  constructor(private adminService: AdminService) {
    this.page = new PageVo(0, 5, 0);
  }

  ngOnInit() {
    const params = {
      start_index: 0,
      page_size: 5
    };

    this.adminService.findNews(params)
      .subscribe(body => {
        console.log(body);
        this.newsList = body.data as NewsVO[];
        console.log(this.newsList);
      });
  }

}
