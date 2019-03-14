import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  article: any;
  angForm: FormGroup;
  panelTitle = 'Edit Article';
  constructor(private route: ActivatedRoute, private router: Router, private service: ArticleService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  async updateArticle(title, content) {
    await this.route.params.subscribe(params => {
      this.service.updateArticle(params['id'], title, content).subscribe(res => {
        console.log('Updated');
        this.router.navigate(['']);
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.article = this.service.editArticle(params['id']).subscribe(res => {
        this.article = res;
      });
    });
  }
}