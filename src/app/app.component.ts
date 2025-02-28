import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NgIf, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'portfolio';
  deviceWidth: number = 0;
  prevDeviceWidth: number = 0;

  ngOnInit(): void {
    this.deviceWidth = window.innerWidth; // Get the initial width
    this.prevDeviceWidth = this.deviceWidth; // Store the initial width for comparison
    console.log(this.deviceWidth, this.prevDeviceWidth)
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.prevDeviceWidth = this.deviceWidth; // Store previous width
    this.deviceWidth = window.innerWidth; // Update width on resize

    // Check if the size has changed
    if (this.deviceWidth !== this.prevDeviceWidth) {
      console.log('Device width changed:', this.deviceWidth);
      // You can add additional logic here to handle the resize event
    }
  }
}
