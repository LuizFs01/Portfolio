import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects-view',
  standalone: true,
  imports: [CommonModule, ButtonModule, ImageModule, DividerModule, RouterModule],
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.sass'],
  providers: []
})
export class ProjectsViewComponent {
    
}
