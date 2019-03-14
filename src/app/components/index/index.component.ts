import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../services/article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  articles: any;

  constructor(private router: Router, private http: HttpClient, private service: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.service.getArticles().subscribe(res => {
      this.articles = res;
    });
  }

  async deleteArticle(id) {
    await this.service.deleteArticle(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit();
    });
  }
}