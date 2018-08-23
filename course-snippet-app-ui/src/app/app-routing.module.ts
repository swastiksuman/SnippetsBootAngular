import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSnippetsComponent } from './add-snippets/add-snippets.component';
import { ViewComponent } from './view-snippets/view-snippets.component';

const routes: Routes = [
  {path: 'addSnippet', component: AddSnippetsComponent},
  {path: 'viewSnippet/:id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRouting {
}
