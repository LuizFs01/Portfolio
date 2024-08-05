import { Component } from '@angular/core';

@Component({
  selector: 'app-training-view',
  standalone: true,
  imports: [],
  templateUrl: './training-view.component.html',
  styleUrl: './training-view.component.sass'
})
export class TrainingViewComponent {
  mostrarDefinicao(titulo: string, texto: string): void {
    const box = document.getElementById('box');
    if (box) {
      box.innerHTML = `
        <h3>${titulo}</h3>
        <p>${texto}</p>
      `;
    }
  }
}
