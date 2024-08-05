import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.sass'
})
export class AboutMeComponent {

}
