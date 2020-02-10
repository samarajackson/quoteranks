import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//universal imports
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//specific to module
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { ViewAuthorsComponent } from './view-authors/view-authors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    AddQuoteComponent,
    ViewQuotesComponent,
    ViewAuthorsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
