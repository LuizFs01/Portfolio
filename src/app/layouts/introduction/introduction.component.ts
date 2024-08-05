import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.sass'
})
export class IntroductionComponent {

}
