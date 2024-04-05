import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AfterContentChecked, Directive, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[appHasContent]',
})
export class HasContentDirective implements AfterContentChecked {
  hasContent = false;
  ngAfterContentChecked(): void {
    this.hasContent = !!this.el.nativeElement.innerHTML;
  }
  constructor(private el: ElementRef) {}
}

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // Input properties
  @Input() buttonText: string = ''; // The button text
  @Input() disabled: boolean = false; // The disabled state of the button
  @Input() icon: string = ''; // The icon of the button
  @Input() iconPosition: 'left' | 'right' | '' = ''; // The position of the icon
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // The size of the button
  @Input() btnColor: string = '#007BFF'; // The color of the button
  @Input() txtColor: string = 'white'; // The color of the button text
  @Input() borderRadius:
    | 'br-0'
    | 'br-1'
    | 'br-2'
    | 'br-3'
    | 'br-4'
    | 'br-5'
    | 'round' = 'br-3'; // The border radius of the button
  // Output event
  @Output() click = new EventEmitter<void>(); // The click event of the button
  constructor() {}
  // Method to emit the click event
  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
  getFontSize() {
    switch (this.size) {
      case 'small':
        return 12;
      case 'medium':
        return 14;
      case 'large':
        return 16;
      default:
        return 14;
    }
  }
}
