import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AvailableLanguages, CodeSnippets } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-snippet-reactive',
  templateUrl: './add-snippets-reactive.component.html',
  styleUrls: ['./add-snippets-reactive.component.css']
})

export class AddSnippetsReactiveComponent implements OnInit {

  snippetForm: FormGroup;
  languageList: AvailableLanguages[];

  @Output()
  newSnippetAdded: EventEmitter<CodeSnippets> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private snippetsService: SnippetsServices, private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.snippetsService.getLanguageDropdown().subscribe((data: AvailableLanguages[]) => {
      this.languageList = data;
    });
    this.snippetForm = new FormGroup({
      name: new FormControl(''),
      language: new FormControl(''),
      code: new FormControl('')
    });
  }

  onSubmit() {
    this.snippetsService.saveSnippet(this.snippetForm.value);
    this.newSnippetAdded.emit(this.snippetForm.value);
  }

}
