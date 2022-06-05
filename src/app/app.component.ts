import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title:string = 'Advances';
  buttonChat_view:boolean = true;
  liveChat:string = "/chat/live-chat";

  constructor(@Inject(DOCUMENT) document:any){    
    if( document.location.pathname == '/chat/' ){
      this.buttonChat_view = false;
    }
  }  

  chatIcon(){
    console.log('abriendo chat');
  }
}
