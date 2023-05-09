import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkListComponent } from './talk-list/talk-list.component';
import { CreateTalkComponent } from './create-talk/create-talk.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { UpdateTalkComponent } from './update-talk/update-talk.component';

const routes: Routes = [
  {path: 'talks', component: TalkListComponent},
  {path: 'create-talk', component: CreateTalkComponent},
  {path: 'update-talk/:id', component: UpdateTalkComponent},
  {path: 'talk-details/:id', component: TalkDetailsComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
