import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListSnippetsComponent } from './list-snippets/list-snippets.component';
import { AddSnippetsComponent } from './add-snippets/add-snippets.component';
import { ViewComponent } from './view-snippets/view-snippets.component';
import { HttpModule } from '@angular/http';
import { SnippetsServices } from './list-snippets/snippets.services';
import { AppRouting } from './app-routing.module';
import { ColorDirective } from './text-color.directive';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AddSnippetsReactiveComponent } from './add-snippets-reactive/add-snippets-reactive.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login/login.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ChatService } from './chat-bot/chat-bot.service';

@NgModule({
  declarations: [
    AppComponent,
    ListSnippetsComponent,
    AddSnippetsComponent,
    ViewComponent,
    ColorDirective,
    AppFooterComponent,
    AddSnippetsReactiveComponent,
    LoginComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRouting,
    NgSelectModule
  ],
  providers: [SnippetsServices, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
