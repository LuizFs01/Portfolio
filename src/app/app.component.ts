import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { PrimeNGConfig } from 'primeng/api';
import { IntroductionComponent } from "./layouts/introduction/introduction.component";
import { AboutComponent } from "./layouts/about/about.component";
import { ProjectsComponent } from "./layouts/projects/projects.component";
import { ExperiencesComponent } from "./layouts/experiences/experiences.component";
import { TrainingComponent } from "./layouts/training/training.component";
import { FooterComponent } from "./layouts/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IntroductionComponent, AboutComponent, ProjectsComponent, ExperiencesComponent, TrainingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}

