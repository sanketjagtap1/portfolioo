import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Button';
  @Input() color: string = 'dark';
  @Input() icon: string = '';
  @Output() onClick = new EventEmitter<void>();

  constructor() {
    this.color = this.color;
  }

  ngOnInit(): void {}

  handleClick(): void {
    this.onClick.emit(); // Emit the click event
  }
}
