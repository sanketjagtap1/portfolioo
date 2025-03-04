import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TitleComponent } from "../../../shared/components/title/title.component";
import { ProjectsService } from '../../../core/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [ButtonComponent, TitleComponent, NgFor],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  data:any
  id:any;
  constructor(public projectService: ProjectsService, public activeRoute: ActivatedRoute, public router:Router){
    console.log("On details page")
    // get id from params
    activeRoute.paramMap.subscribe(params=>{
      this.id = params.get('id');
    })

    projectService.getProjectByID(this.id).subscribe((res:any)=>{
      console.log(res.data)
      this.data = res.data
    })
  }


  handleGetInTouch(){
    console.log('clicked')
    this.router.navigate(['/allProjects'])
  }
}
