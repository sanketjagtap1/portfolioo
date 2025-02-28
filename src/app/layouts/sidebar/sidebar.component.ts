import { Component, OnInit, HostListener } from '@angular/core';
import { MenusComponent } from "../menus/menus.component";
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [MenusComponent, SocialMediaComponent]
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
