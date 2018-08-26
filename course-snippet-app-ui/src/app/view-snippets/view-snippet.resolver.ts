import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SnippetsServices } from '../list-snippets/snippets.services';

@Injectable()
export class ViewSnippetResolver implements Resolve<any> {
  constructor(private snippetService: SnippetsServices) {
   }

   resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
    console.log('Route Resolver Called');
    return this.snippetService.getSnippetById(route.params['id']);
   }
}
