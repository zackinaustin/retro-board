import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../class/comment';

@Component({
  selector: 'retro-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent implements OnInit {
  @Input()
  comment: Comment;

  constructor() {
  }

  ngOnInit() {
  }

}
