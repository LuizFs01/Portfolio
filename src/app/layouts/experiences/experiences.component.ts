import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.sass']
})
export class ExperiencesComponent { }
