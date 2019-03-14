import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  panelTitle = 'Add Article';
  angForm: FormGroup;

  constructor(private router: Router, private articleService: ArticleService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  async addArticle(title, content) {
    await this.articleService.addArticle(title, content).subscribe(res => {
      console.log('Created');
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }
}
