import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './blog/articles/articles.component';
import { ArticleComponent } from './blog/article/article.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ArticleComposeComponent } from './blog/article-compose/article-compose.component';
import { SizerComponent } from './blog/sizer/sizer.component';
import { ArticleEditComponent } from './blog/article-edit/article-edit.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    AdminComponent,
    ArticleComposeComponent,
    SizerComponent,
    ArticleEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }