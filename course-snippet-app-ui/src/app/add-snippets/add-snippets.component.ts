import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';


@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippets.component.html'
})

export class AddSnippetsComponent {

  @Output()
  addSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();

  name = '';
  langugage = '';
  code = '';

  constructor() { }

  saveSnippets(){
    const newSnippet: CodeSnippets = {
      'id': 1,
      'name': this.name,
      'language': this.langugage,
      'code': this.code
    };
    this.addSnippetEvent.emit(newSnippet);
  }

}
