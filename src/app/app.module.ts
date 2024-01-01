import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './app-routing.module';
import { ListChatComponent } from './Home/list-chat/list-chat.component';
import { ChatComponent } from './Home/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListChatComponent,
    ChatComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
