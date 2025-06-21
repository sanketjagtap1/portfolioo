import { Component } from '@angular/core';
import { MenusComponent } from "../menus/menus.component";
import { SocialMediaComponent } from "../social-media/social-media.component";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MenusComponent, SocialMediaComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuVisible: boolean = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
