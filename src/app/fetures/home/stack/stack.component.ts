import { Component } from '@angular/core';
import { StackcardComponent } from "../../../shared/components/stackcard/stackcard.component";
import { NgFor } from '@angular/common';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-stack',
  imports: [TitleComponent, StackcardComponent, NgFor],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  stackDetails=[
    {
      "name": "Angular",
      "description": "Frontend Development",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
    },
    {
      "name": "JavaScript",
      "description": "Web Development",
      "image": "https://img.icons8.com/color/512/javascript.png"
      },
      {
        "name": "Node Js",
        "description": "Backend Development",
        "image": "https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png"
        },
        {
          "name": "SQL",
          "description": "Database",
          "image": "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"
          },
          {
            "name": "AWS",
            "description": "Cloud",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0chhXOIHX6peyxvYEdlViwc2iR50ZODzTEA&s"
            }
  ]
}
