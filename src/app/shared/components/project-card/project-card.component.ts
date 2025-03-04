import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit{
@Input() data:any=[];

constructor( private readonly router: Router){}
ngOnInit(): void {
  console.log(this.data)
}

ShowProjectDetails(id:any){
  console.log(id)
  this.router.navigate(['/projectDetails', id])
}
}
