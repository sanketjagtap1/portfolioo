import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { NgFor } from '@angular/common';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-recent-component',
  imports: [ProjectCardComponent, NgFor, TitleComponent],
  templateUrl: './recent-component.component.html',
  styleUrl: './recent-component.component.scss'
})
export class RecentComponentComponent {
  cardDetails=[
    {
      title: 'BeatNest',
      category: 'Music'
    },
    {
      title: 'ShortenCenter',
      category: 'SAS'
    }
  ];

@Input() data:any;
@Output() onClick = new EventEmitter<void>()



handleClick(): void {
  this.onClick.emit(); // Emit the click event
}

}
