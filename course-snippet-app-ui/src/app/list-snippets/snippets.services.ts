import {Http} from '@angular/http';
import {Injectable, EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import {log} from 'util';

@Injectable()
export class SnippetsServices  {
  constructor(private http: Http) {

   }

getTasks() {
  return this.http.get('http://localhost:8080/snippets/allsnippets').pipe(map(
    (response) => response.json())
  );
}
}
