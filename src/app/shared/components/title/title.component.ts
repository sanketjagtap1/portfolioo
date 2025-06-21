import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-title',
  imports: [ButtonComponent, NgIf, RouterLink],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() label: string = '';
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() button?: string = '';
  @Input() route?: string = '';

}
