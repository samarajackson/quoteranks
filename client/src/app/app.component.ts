import { Component, OnInit } from '@angular/core';
//import { ViewAuthorsComponent } from './view-authors/view-authors.component'
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'client';
  //allAuthors: any = [];
  constructor(public _httpService: HttpService) { }

  ngOnInit() {
    //this.getAllAuthors();
  }
  
  // getAllAuthors(): void {
  //   const obs = this._httpService.findAllAuthors(); // this goes to the service file
  //   obs.subscribe((data: any) => {
  //     this.allAuthors = data;
  //     console.log(this.allAuthors);
  //   })
  // }
}
