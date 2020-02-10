import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  errors = [];
  newQuote = {};
  id = "";
  constructor(public _httpService: HttpService, public _app: AppComponent) { 

  }

  ngOnInit() {

  }

  onSubmitCreateQuote(){
    this.errors = [];
    const obs = this._httpService.createQuote(this.id,this.newQuote);
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
        this.newQuote = { };
        //TBD Need to redirect idk how rn

      }
    })
  
}
}
