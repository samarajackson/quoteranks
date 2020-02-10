import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from './../app.component';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css']
})
export class ViewQuotesComponent implements OnInit {
  theAuthor = { id:"", '_quotes': [] }
  //allQuotes = []
  OneQuote: any = {}

  constructor(private route: ActivatedRoute, private _router: Router, public _app: AppComponent, public _httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getAllQuotes(params['id']);
    });
    
  }
  getAllQuotes(id: string): void {
    const obs = this._httpService.findOneAuthor(id);
    obs.subscribe((data: any) => {
      this.theAuthor = data;
      console.log(this.theAuthor+" and quotes: " + this.theAuthor._quotes)
    })
  }

  getOneQuote( id: string, authorId: string ): any {
    const obs = this._httpService.findOneQuote(id, authorId);
    obs.subscribe((data: any)=> {
      return(data);
    })
  }

  upVote(id: string, authorId: string, data: any): void {
    const obs = this._httpService.upvote(id, authorId, data);
    obs.subscribe((data: any) => {
      let oneQuote = this.getOneQuote(id, authorId);
      let value = oneQuote.value + 1;

      //need to think about how to get the current value of the quote and add/subtract one idk
      this.getAllQuotes(authorId);
    })
  }
}
