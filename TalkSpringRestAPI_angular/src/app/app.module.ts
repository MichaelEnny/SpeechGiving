import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TalkListComponent } from './talk-list/talk-list.component';
import { CreateTalkComponent } from './create-talk/create-talk.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { UpdateTalkComponent } from './update-talk/update-talk.component';

@NgModule({
  declarations: [
    AppComponent,
    TalkListComponent,
    CreateTalkComponent,
    TalkDetailsComponent,
    UpdateTalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
