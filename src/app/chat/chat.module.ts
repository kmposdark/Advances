import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from "@angular/material/grid-list";
import { FlexLayoutModule, FlexModule, GridModule } from '@angular/flex-layout';
import { ChatRoutingModule } from './chat-routing.module';
import { LiveChatComponent } from './Live-chat/live-chat.component';
import {MatListModule} from '@angular/material/list';
 

@NgModule({
  declarations: [
    LiveChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    FlexModule,
    GridModule,
    MatCheckboxModule,
    MatGridListModule,    
    MatListModule
  ]
})
export class ChatModule { }
