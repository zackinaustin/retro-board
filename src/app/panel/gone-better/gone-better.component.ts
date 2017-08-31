import { Component, OnInit } from '@angular/core';
import { PanelComponent } from '../panel.component';

import { Comment } from '../../class/comment';

@Component({
  selector: 'retro-gone-better',
  templateUrl: '../panel.component.html',
  styleUrls: ['../panel.component.scss']
})
export class GoneBetterComponent implements OnInit, PanelComponent {
  title = 'What should gone better';
  comments: Comment[];

  constructor() {
  }

  ngOnInit() {
    this.comments = [{
      id: '1',
      group: 1,
      creator: 'Zhang',
      createdDate: new Date('08/07/2015'),
      summary: 'testSummary'
    }, {
      id: '2',
      group: 2,
      creator: 'Zhang2',
      createdDate: new Date('08/07/2015'),
      summary: 'testSummary2'
    }];
  }

}
