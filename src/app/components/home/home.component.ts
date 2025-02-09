import { Component } from '@angular/core';
import { RecentComponentComponent } from "../shared/recent-component/recent-component.component";
import { ButtonComponent } from '../reusable/button/button.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { StackComponent } from "../stack/stack.component";

@Component({
  selector: 'app-home',
  imports: [RecentComponentComponent, ButtonComponent, TestimonialsComponent, StackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
data = {
  title: "Selected Projects",
  button: "All Projects",
  color: 'Dark'
}
}
