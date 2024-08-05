import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {

}
