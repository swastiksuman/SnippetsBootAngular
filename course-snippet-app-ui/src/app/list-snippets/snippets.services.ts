import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable, EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import {log} from 'util';
import { CodeSnippets } from './list-snippets.component';

@Injectable()
export class SnippetsServices  {
  constructor(private http: Http) {

   }

getTasks() {
  return this.http.get('http://localhost:8080/snippets/allsnippets').pipe(map(
    (response) => response.json())
  );
}

saveSnippet(codeSnippets: CodeSnippets) {
  console.log('Inside Save Snippet');
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  this.http.post('http://localhost:8080/snippets/savesnippet', codeSnippets, options).subscribe((data) => {
    console.log(data);
  });
}
}
