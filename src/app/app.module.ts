import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { TranslateModule } from '@ngx-translate/core';

import {
  StreamChatModule,
  StreamAutocompleteTextareaModule,
} from 'stream-chat-angular';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
