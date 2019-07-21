import { Component, EventEmitter, Output, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CodeSnippets, AvailableLanguages } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippets.component.html',
  styleUrls: ['./add-snippets.component.css']
})

export class AddSnippetsComponent implements OnInit, OnChanges, OnDestroy {

  @Output()
  newSnippetAdded: EventEmitter<CodeSnippets> = new EventEmitter();

  name: string;
  language: string;
  code: string;
  languageList: AvailableLanguages[];

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
    this.snippetsService.getLanguageDropdown().subscribe((data: AvailableLanguages[]) => {
      
    });
    this.languageList = [{"id":"5d3418d81c9d440000e930ae","language":"Java"}, {"id":"5d3418d81c9d440000e930af","language":"C"}];
    console.log('Inside Add Snippet Init');
  }

  ngOnChanges() {
    console.log('Inside Add Snippet On Changes');
  }

  ngOnDestroy() {
    console.log('Inside Add Snippet On Destroy');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const newSnippet: CodeSnippets = {
      'id': null,
      'name': form.value.name,
      'language': form.value.language,
      'code': form.value.code
    };
    console.log(newSnippet);
    this.snippetsService.saveSnippet(newSnippet).subscribe(data => {
      this.newSnippetAdded.emit(data);
    });
  }
}
