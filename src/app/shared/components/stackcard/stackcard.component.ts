import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stackcard',
  imports: [],
  templateUrl: './stackcard.component.html',
  styleUrl: './stackcard.component.scss'
})
export class StackcardComponent {
  @Input() data:any=[];
  
}
