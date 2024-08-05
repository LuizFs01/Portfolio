import { Component, Renderer2, Inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, MenubarModule, AvatarModule, ToolbarModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass'],
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  private currentTheme: string = 'assets/themes/lara-dark-purple.css'; // Default theme

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Inicializa o elemento de link do tema
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      this.currentTheme = themeLink.href; // Mantém o tema atual se já estiver definido
    } else {
      const link = this.renderer.createElement('link');
      link.id = 'app-theme';
      link.rel = 'stylesheet';
      link.href = this.currentTheme; // Define o tema inicial
      this.renderer.appendChild(this.document.head, link);
    }
  
    this.updateMenuItems();
  }

  isLightTheme(): boolean {
    return this.currentTheme.includes('lara-light-purple.css');
  }

  switchTheme(theme: string) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    console.log('Current themeLink before switch:', themeLink ? themeLink.href : 'No theme link found');
    
    if (themeLink) {
      themeLink.href = theme; // Atualiza o caminho para o novo tema
      console.log('Updated themeLink href:', themeLink.href);
    } else {
      const link = this.renderer.createElement('link');
      link.id = 'app-theme';
      link.rel = 'stylesheet';
      link.href = theme;
      this.renderer.appendChild(this.document.head, link);
      console.log('Created new theme link with href:', link.href);
    }

    this.currentTheme = theme; // Atualiza o tema atual
    this.updateMenuItems(); // Atualiza os itens do menu para refletir a mudança de tema
  }

  updateMenuItems() {
    const newTheme = this.isLightTheme() ? 'assets/themes/lara-dark-purple.css' : 'assets/themes/lara-light-purple.css';
    this.items = [
      {
        label: 'Sobre mim',
        icon: 'pi pi-user',
        command: (event: any) => {
          this.scrollToSection('sobre-mim');
        }
      },
      {
        label: 'Experiência',
        icon: 'pi pi-verified',
        command: (event: any) => {
          this.scrollToSection('experiencia');
        }
      },
      {
        label: 'Formação',
        icon: 'pi pi-graduation-cap',
        command: (event: any) => {
          this.scrollToSection('formacao');
        }
      },
      {
        label: 'Projetos',
        icon: 'pi pi-wrench',
        command: (event: any) => {
          this.scrollToSection('projetos');
        }
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
        command: (event: any) => {
          this.scrollToSection('contato');
        }
      },
      {
        icon: 'pi pi-cog',
        items: [
          {
            icon: this.isLightTheme() ? 'pi pi-moon' : 'pi pi-sun',
            command: () => this.switchTheme(newTheme)
          }
        ]
      }
    ];
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
