import { Injectable } from '@angular/core';
// import these fo rinjection
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public _http: HttpClient) { }
  // more functions
  findAllAuthors(): any{
    return this._http.get('/api/authors');
  }

  // createQuote(authorId:string, data:any): any{
  //   return this._http.post('/authors/'+authorId+'/quotes',data);
  // }

  createAuthor(data: any): any{
    return this._http.post('/api/authors',data);
  }

  findOneAuthor(id: string): any {
    return this._http.get('/api/authors/'+id);
  }

  deleteAuthor(id: string): any {
    return this._http.delete('/api/authors/'+id);
  }

  createQuote(id: string, data: any) {
    return this._http.post('/api/authors/'+id+'/quotes', data);
  }

  findOneQuote( id: string, authorId: string) {
    return this._http.get('/api/authors/'+authorId+'/quotes/'+id);
  }

  upvote(id:string, authorId:string, data:any){
    return this._http.post('/api/authors/'+authorId+'/quotes/'+id, data);
  }
}
