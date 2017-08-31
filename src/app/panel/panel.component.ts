import { Component, OnInit } from '@angular/core';
import { Comment } from '../class/comment';

@Component({
  selector: 'retro-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  title: string;
  comments: Comment[];

  constructor() {
  }

  ngOnInit() {
  }

}
