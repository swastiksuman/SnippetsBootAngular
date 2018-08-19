import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';


@Component({
  selector: 'app-view-snippets',
  templateUrl: './view-snippets.component.html'
})

export class ViewComponent {

  /* @Output()
  deleteSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();
 */
  @Input()
  currentSnippet: CodeSnippets = {'id': 0, 'name': '', 'language': '', 'code': '', };

  constructor(private snippetsService: SnippetsServices) {
    console.log(snippetsService.getTasks().subscribe(
      data => {
        console.log(data);
      },
      err => {

      }
    ));
  }

  updateSnippets() {
    console.log('updateSnippets');
    this.snippetsService.saveSnippet(this.currentSnippet);
  }

  deleteSnippets() {
    this.snippetsService.deleteSnippet(this.currentSnippet.id);
  }
}
