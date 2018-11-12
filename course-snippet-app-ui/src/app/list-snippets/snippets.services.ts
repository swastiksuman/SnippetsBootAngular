import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable, EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import {log} from 'util';
import { CodeSnippets, AvailableLanguages } from './list-snippets.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SnippetsServices  {

eventEmitter: EventEmitter<CodeSnippets[]> = new EventEmitter();

  private codeSnippets: CodeSnippets[] = [];
  private codeUpdated = new Subject<CodeSnippets[]>();

  constructor(private http: HttpClient, ) {

   }

getSnippets() {
  this.http.get<CodeSnippets[]>('snippets/allsnippets').subscribe((data) => {
    this.codeSnippets = data;
    this.codeUpdated.next([...this.codeSnippets]);
  });
}

getSnippetUpdateListener() {
  return this.codeUpdated.asObservable();
}

saveSnippet(codeSnippets: CodeSnippets): Observable<any> {
  console.log('Inside Save Snippet');
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  return this.http.post('snippets/savesnippet', codeSnippets);
}


deleteSnippet(id: number) {
  console.log('ID to be deleted' + id);
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  this.http.delete('snippets/deletesnippet/' + id).subscribe((data) => {
    console.log(data);
  }, (error) => console.log(error), () => console.log('delete complete'));
}

getSnippetById(id: number): Observable<CodeSnippets> {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({headers: headers });
  return this.http.get<CodeSnippets>('snippets/getsnippet/' + id);
}

testParameter() {
  const params = new HttpParams({
    fromObject: {
      first_name: 'ss',
      last_name: 'pp'
    }
  });

  this.http.post('snippets/testpost', params).subscribe((data) => console.log(data), (err) => console.log(err));
}

getLanguageDropdown() {
  return this.http.get('snippets/getSupportedLanguages');
}
}
