import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable, EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import {log} from 'util';
import { CodeSnippets } from './list-snippets.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SnippetsServices  {
  constructor(private http: HttpClient) {

   }

getTasks(): Observable<CodeSnippets[]> {
  return this.http.get<CodeSnippets[]>('http://localhost:8080/snippets/allsnippets');
}

saveSnippet(codeSnippets: CodeSnippets) {
  console.log('Inside Save Snippet');
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  this.http.post('http://localhost:8080/snippets/savesnippet', codeSnippets).subscribe((data) => {
    console.log(data);
  });
}

deleteSnippet(id: number) {
  console.log('ID to be deleted' + id);
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  this.http.delete('http://localhost:8080/snippets/deletesnippet/' + id).subscribe((data) => {
    console.log(data);
  }, (error) => console.log(error), () => console.log('delete complete'));
}

getSnippetById(id: number): Observable<CodeSnippets> {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  return this.http.get<CodeSnippets>('http://localhost:8080/snippets/getsnippet/' + id);
}
}
