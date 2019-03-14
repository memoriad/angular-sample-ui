import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  result: any;
  constructor(private http: HttpClient) { }

  addArticle(title, content) {
    const uri = 'http://localhost:8080/article/add';
    const obj = {
      title: title,
      content: content
    };
    return this
      .http
      .post(uri, obj);
  }

  getArticles() {
    const uri = 'http://localhost:8080/articles';
    return this
      .http
      .get(uri);
  }

  editArticle(id) {
    const uri = 'http://localhost:8080/article/' + id;
    return this
      .http
      .get(uri);
  }

  updateArticle(id, title, content) {
    const uri = 'http://localhost:8080/article/update/' + id;

    const obj = {
      title: title,
      content: content
    };
    return this
      .http
      .patch(uri, obj);
  }

  deleteArticle(id) {
    const uri = 'http://localhost:8080/article/delete/' + id;

    return this
      .http
      .delete(uri);
  }
}