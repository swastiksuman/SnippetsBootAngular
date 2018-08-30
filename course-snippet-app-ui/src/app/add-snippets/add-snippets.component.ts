import { Component, EventEmitter, Output, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippets.component.html'
})

export class AddSnippetsComponent implements OnInit, OnChanges, OnDestroy {

  @Output()
  newSnippetAdded: EventEmitter<CodeSnippets> = new EventEmitter();

  name: string;
  language: string;
  code: string;

  constructor(private snippetsService: SnippetsServices, private route: Router) {
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
    this.newSnippetAdded.emit(newSnippet);
  }

  ngOnInit() {
    console.log('Inside Add Snippet Init');
  }

  ngOnChanges() {
    console.log('Inside Add Snippet On Changes');
  }

  ngOnDestroy() {
    console.log('Inside Add Snippet On Destroy');
  }
}
