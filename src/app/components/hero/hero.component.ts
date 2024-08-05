import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ButtonModule } from 'primeng/button'; 
import { RippleModule } from 'primeng/ripple'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'] 
})
export class HeroComponent {
  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/luiz-h-freitas/', '_blank');
  }
}
