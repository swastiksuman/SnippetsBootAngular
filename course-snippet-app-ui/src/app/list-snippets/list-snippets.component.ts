import { Component, ViewEncapsulation } from '@angular/core';
import { SnippetsServices } from './snippets.services';

export interface CodeSnippets {
  id: number;
  name: string;
  language: string;
  code: string;
}

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'list-snippets.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListSnippetsComponent {

  listOfSnippets: CodeSnippets[] = [];
  selectedSnippet: CodeSnippets;
  showAdd = false;
  showUpdate = false;

  constructor(private snippetsService: SnippetsServices) {
    snippetsService.getTasks().subscribe(
      (data: CodeSnippets[]) => {
        this.listOfSnippets = data;
      },
      err => {
      }
    );

   }

  addSnippetEventHandler(event: CodeSnippets) {
    this.listOfSnippets.push(event);
  }

  showSnippet(snippet: CodeSnippets) {
    this.showAdd = false;
    this.showUpdate = true;
    console.log('SSS');
    console.log(snippet.name);
    this.selectedSnippet = snippet;
  }

  showAddToggle() {
    this.showAdd = !this.showAdd;
  }

  deleteSnippetEventHandler(event: CodeSnippets) {
    console.log('Delete Handler');
    this.listOfSnippets.splice(this.listOfSnippets.indexOf(event), 1);
  }
}
