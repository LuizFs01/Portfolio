import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from "../../components/menubar/menubar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {  

  ngOnInit(): void {
    
  }
}
