import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LiveChat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {
  
  constructor() { }

  userPhoto:string = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  userPhoto2:string = "../../../assets/images/woman-3083383_1920.jpg";

  ngOnInit(): void {
  }

}