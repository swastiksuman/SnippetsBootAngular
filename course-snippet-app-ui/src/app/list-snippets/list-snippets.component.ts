import { Component, ViewEncapsulation, OnInit, OnChanges, OnDestroy, DoCheck, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SnippetsServices } from './snippets.services';
import { timeInterval } from 'rxjs/operators';
import { AddSnippetsComponent } from '../add-snippets/add-snippets.component';
import { Subscription } from 'rxjs';

export interface CodeSnippets {
  id: number;
  name: string;
  language: string;
  code: string;
}

export interface AvailableLanguages {
  id: string;
  language: string;
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
  private codeSnippetSubscription: Subscription;
  showAddReactive = false;
  people : string[];
  filteredSnippet;
  @ViewChild(AddSnippetsComponent) addInfo;

  constructor(private snippetsService: SnippetsServices, private changeRef: ChangeDetectorRef) {
   }

  ngOnInit() {
    this.snippetsService.getSnippets();
    this.codeSnippetSubscription = this.snippetsService.getSnippetUpdateListener().subscribe((data: CodeSnippets[]) => {
      this.listOfSnippets = data;
    });
    console.log(this.addInfo.name + 'update');
    this.people = ['Souj', 'Swas', 'Shan', 'Jyo'];
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
  }

  updateSnippet(newSnippet: CodeSnippets) {
    this.listOfSnippets.push(newSnippet);
  }

  test() {
    console.log('test');
    this.snippetsService.testParameter();
  }

  delete(event) {
    console.log('Delete Called');
  }

  showAddReactiveToggle() {
    this.showAddReactive = !this.showAddReactive;
  }

  search() {
    if (this.filteredSnippet !== undefined) {
      this.listOfSnippets = this.listOfSnippets.filter(snippet =>
        this.filteredSnippet === snippet.id
      );
    }
  }
}
