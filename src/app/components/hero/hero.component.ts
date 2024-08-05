import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ButtonModule } from 'primeng/button'; 
import { RippleModule } from 'primeng/ripple'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'] 
})
export class HeroComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const tituloElements = this.el.nativeElement.querySelectorAll('.titulo-principal');
    tituloElements.forEach((titulo: HTMLElement, index: number) => {
      this.typeWrite(titulo, index);
    });
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/luiz-h-freitas/', '_blank');
  }

  private typeWrite(elemento: HTMLElement, index: number) {
    const text = elemento.getAttribute('data-text') || elemento.innerText;
    elemento.innerHTML = ''; // Clear existing content
  
    // Ajuste o tempo de atraso conforme necessário para uma escrita mais lenta
    const typingSpeed = 100; // Tempo em milissegundos por caractere
    const initialDelay = 500; // Tempo em milissegundos de atraso inicial para o índice do elemento
  
    text.split('').forEach((char, i) => {
      setTimeout(() => {
        elemento.innerHTML += char;
      }, typingSpeed * i + (index * initialDelay));
    });
  }
  
  
}
