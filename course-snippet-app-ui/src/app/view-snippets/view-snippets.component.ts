import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-snippets',
  templateUrl: './view-snippets.component.html'
})

export class ViewComponent implements OnInit {

  /* @Output()
  deleteSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();
 */
  currentSnippet: CodeSnippets;

  constructor(private snippetsService: SnippetsServices, private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.snippetsService.getSnippetById(productId).subscribe(
      (data: CodeSnippets) => {
        this.currentSnippet = data;
      }
    );
  }
  updateSnippets() {
    console.log('updateSnippets');
    this.snippetsService.saveSnippet(this.currentSnippet);
  }

  deleteSnippets() {
    this.snippetsService.deleteSnippet(this.currentSnippet.id);
  }
}
