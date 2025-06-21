import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { StackComponent } from './stack/stack.component';
import { RecentComponentComponent } from '../projects/recent-component/recent-component.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RecentComponentComponent, ButtonComponent, TestimonialsComponent, StackComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data = {
    title: "Selected Projects",
    button: "All Projects",
    color: 'Dark',
    route: 'allProjects'
  }
}
