import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LiveChat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {
  
  constructor() { }

  userPhoto:string = "https://material.angular.io/assets/img/examples/shiba1.jpg";

  ngOnInit(): void {
  }

}