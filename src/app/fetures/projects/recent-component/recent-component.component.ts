import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { NgFor } from '@angular/common';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { ProjectsService } from '../../../core/services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-component',
  imports: [ProjectCardComponent, NgFor, TitleComponent],
  templateUrl: './recent-component.component.html',
  styleUrl: './recent-component.component.scss'
})
export class RecentComponentComponent {
  cardDetails:any;

@Input() data:any;
@Output() onClick = new EventEmitter<void>()

constructor(public projectService: ProjectsService){}

ngOnInit(){
  this.projectService.getRecentProjects().subscribe(res=>{
    console.log(res.data)
    this.cardDetails=res.data
  })
}



handleClick(): void {
  this.onClick.emit(); // Emit the click event
}
}
