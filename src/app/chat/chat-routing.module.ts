import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveChatComponent } from "./Live-chat/live-chat.component";


const routes: Routes = [{ 
    path: '',
    component: LiveChatComponent,
    children: [
      { path: 'live-chat', component: LiveChatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
