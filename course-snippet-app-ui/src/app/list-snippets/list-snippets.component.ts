import { Component, ViewEncapsulation, OnInit, OnChanges, OnDestroy, DoCheck, ChangeDetectorRef } from '@angular/core';
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
export class ListSnippetsComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  listOfSnippets: CodeSnippets[] = [];
  selectedSnippet: CodeSnippets;
  showAdd = false;
  showUpdate = false;

  constructor(private snippetsService: SnippetsServices, private changeRef: ChangeDetectorRef) {
   }

  ngOnInit() {
    console.log('List On Init Call');
    this.snippetsService.getTasks().subscribe(
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
    console.log('Inside show add' + this.showAdd);
    this.showAdd = !this.showAdd;
  }

  deleteSnippetEventHandler(event: CodeSnippets) {
    console.log('Delete Handler');
    this.listOfSnippets.splice(this.listOfSnippets.indexOf(event), 1);
  }

  ngOnChanges() {
    console.log('List Snippet On Changes');
  }

  ngOnDestroy() {
    console.log('List Snippet On Destroy');
  }

  ngDoCheck() {
    console.log('DO Check List Snippet');
    this.changeRef.detectChanges();
  }
}
