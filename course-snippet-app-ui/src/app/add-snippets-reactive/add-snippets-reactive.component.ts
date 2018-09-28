import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AvailableLanguages } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';

@Component({
  selector: 'app-add-snippet-reactive',
  templateUrl: './add-snippets-reactive.component.html',
  styleUrls: ['./add-snippets-reactive.component.css']
})

export class AddSnippetsReactiveComponent implements OnInit {

  snippetForm: FormGroup;
  languageList: AvailableLanguages[];

  constructor(private formBuilder: FormBuilder, private snippetsService: SnippetsServices) { }

  ngOnInit() {
    this.snippetsService.getLanguageDropdown().subscribe((data: AvailableLanguages[]) => {
      this.languageList = data;
    });
    this.snippetForm = new FormGroup({
      name: new FormControl(''),
      languagle: new FormControl(''),
      code: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.snippetForm);
  }

}
