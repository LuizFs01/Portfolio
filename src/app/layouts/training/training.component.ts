import { Component } from '@angular/core';
import { TrainingViewComponent } from "../../components/training-view/training-view.component";

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [TrainingViewComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.sass'
})
export class TrainingComponent {

}
