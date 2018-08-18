import { Component, EventEmitter, Output } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';


@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippets.component.html'
})

export class AddSnippetsComponent {

  @Output()
  addSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();

  name: string;
  language: string;
  code: string;

  constructor(private snippetsService: SnippetsServices) {
    console.log('Add Const Initialized');
   }

  saveSnippets() {
    const newSnippet: CodeSnippets = {
      'id': null,
      'name': this.name,
      'language': this.language,
      'code': this.code
    };
    console.log(newSnippet);
    this.snippetsService.saveSnippet(newSnippet);
  }

}
