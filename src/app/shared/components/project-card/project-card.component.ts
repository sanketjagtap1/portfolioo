import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit{
@Input() data:any=[];

ngOnInit(): void {
  console.log(this.data)
}
}
