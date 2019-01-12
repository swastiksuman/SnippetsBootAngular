import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSnippetsComponent } from './add-snippets/add-snippets.component';
import { ViewComponent } from './view-snippets/view-snippets.component';
import { ViewSnippetResolver } from './view-snippets/view-snippet.resolver';
import { LoginComponent } from './login/login.component';
import { ListSnippetsComponent } from './list-snippets/list-snippets.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: ListSnippetsComponent, children: [
    {path: 'addSnippet', component: AddSnippetsComponent},
  {path: 'viewSnippet/:id', component: ViewComponent, resolve: {
    viewres: ViewSnippetResolver
  }}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true})],
  exports: [RouterModule],
  declarations: [],
  providers: [ViewSnippetResolver],
})
export class AppRouting {
}
