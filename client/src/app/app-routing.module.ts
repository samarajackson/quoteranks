import { NgModule, ɵɵstaticViewQuery } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ViewAuthorsComponent } from './view-authors/view-authors.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'authors', component:ViewAuthorsComponent },
  { path: '', pathMatch: 'full', redirectTo:'/authors'},
  { path: 'viewquotes/:id', pathMatch: 'full', component:ViewQuotesComponent },
  { path: '**', component: ViewAuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
