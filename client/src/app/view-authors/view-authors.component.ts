import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrls: ['./view-authors.component.css']
})
export class ViewAuthorsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _router: Router, public _app: AppComponent, public _httpService: HttpService) { }
  allAuthors: any = [];

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getAllAuthors();
    });
    
  }
  
  getAllAuthors(): void {
    const obs = this._httpService.findAllAuthors(); // this goes to the service file
    obs.subscribe((data: any) => {
      this.allAuthors = data;
      console.log(this.allAuthors);
    })
  }
}
