import { Component } from '@angular/core';
import { ContactAreaComponent } from "../../components/contact-area/contact-area.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactAreaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
