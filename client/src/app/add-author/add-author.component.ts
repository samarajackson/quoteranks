import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor = {};
  errors = [];
  constructor(public _httpService: HttpService, public _appCom: AppComponent) { }

  ngOnInit() {

  }
  onSubmitCreateAuthor(){
    this.errors = [];
    const obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe((data:any)=>{
      if(data["errors"]){
        //this is an error check for custom error messages (see models for custom error message setup)
        for(let key in data.errors){
          this.errors.push(data.errors[key].message);
        }
      } else {
        // this line clears the errors array when they are successful
        // and the author was added to the database
        this.errors = [];
        this.newAuthor = { author: "" };
        //TBD Need to redirect idk how rn

      }
    })
  }
}
