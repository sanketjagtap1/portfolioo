import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { NgFor } from '@angular/common';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-testimonials',
  imports: [TitleComponent, TestimonialCardComponent, NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  cardDetails=[
    {
      name: 'Omkar Sakat',
      designation: 'Co-Founder For stories events',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed temporibus quod assumenda illum earum minus, reiciendis ut unde sint nam numquam, impedit blanditiis fugit porro, ea nisi ipsum eveniet.',
      url: 'https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg?w=1060'
    },
    {
      name: 'Akash Waghmare',
      designation: 'Founder Aw Photography',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed temporibus quod assumenda illum earum minus, reiciendis ut unde sint nam numquam, impedit blanditiis fugit porro, ea nisi ipsum eveniet.',
      url: 'https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg?w=1060'
    },
    {
      name: 'Rohit Gaikwad',
      designation: 'Founder BeatNest',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed temporibus quod assumenda illum earum minus, reiciendis ut unde sint nam numquam, impedit blanditiis fugit porro, ea nisi ipsum eveniet.',
      url: 'https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg?w=1060'
    },
    {
      name: 'Rohit Gaikwad',
      designation: 'Founder BeatNest',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed temporibus quod assumenda illum earum minus, reiciendis ut unde sint nam numquam, impedit blanditiis fugit porro, ea nisi ipsum eveniet.',
      url: 'https://img.freepik.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg?w=1060'
    }
  ]

}
