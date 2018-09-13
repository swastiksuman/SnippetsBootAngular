import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CodeSnippets, AvailableLanguages } from '../list-snippets/list-snippets.component';
import { SnippetsServices } from '../list-snippets/snippets.services';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-view-snippets',
  templateUrl: './view-snippets.component.html'
})
export class ViewComponent implements OnInit {

  @Output()
  deleteSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();
  languageList: AvailableLanguages[];
  currentSnippet: CodeSnippets = {id: 0, name: '', language: '', code: ''};

  constructor(private snippetsService: SnippetsServices, private activatedRoute: ActivatedRoute, private route: Router) {
    /*const productId = this.activatedRoute.snapshot.params['id'];
    this.snippetsService.getSnippetById(productId).subscribe(
      (data: CodeSnippets) => {
        this.currentSnippet = data;
      }
    );*/
    this.activatedRoute.data.pipe(map(data => data.viewres)).subscribe(
      (data: CodeSnippets) => {
      this.currentSnippet = data;
    }

  );
   }

  ngOnInit() {
    this.snippetsService.getLanguageDropdown().subscribe((data: AvailableLanguages[]) => {
      this.languageList = data;
    });
  }
  updateSnippets() {
    console.log('updateSnippets');
    this.snippetsService.saveSnippet(this.currentSnippet);
    this.route.navigate(['/']);
  }

  deleteSnippets() {
    this.snippetsService.deleteSnippet(this.currentSnippet.id);
    this.deleteSnippetEvent.emit();
  }
}
