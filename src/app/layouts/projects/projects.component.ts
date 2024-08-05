import { Component } from '@angular/core';
import { ProjectsViewComponent } from "../../components/projects-view/projects-view.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsViewComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {

}
