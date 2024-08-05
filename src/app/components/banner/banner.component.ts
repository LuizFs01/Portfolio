import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  description?: string;
  label?: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ButtonModule, TimelineModule, CardModule,],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent {  
  events: EventItem[];

  constructor() {
    this.events = [
      { status: 'CES Sistemas', date: '06/11/2023 - 05/03/2024', icon: 'pi pi-cog', color: '#9C27B0', description: 'Trabalhei na CES Sistemas como Desenvolvedor Frontend.', label: 'Desenvolvedor Front-end'},
      { status: 'Monisat - Gerenciamento de Risco', date: '24/10/2017 - 29/10/2023', icon: 'pi pi-cog', color: '#673AB7', description: 'Trabalhei na Monisat em diversas funções, incluindo Operador pleno de Monitoramento e Supervisor de Operações.', label: 'Operador de Monitoramento' },
      { status: 'Laticínios Latco', date: '08/08/2016 - 19/10/2017', icon: 'pi pi-cog', color: '#FF9800', description: 'Trabalhei na Laticínios Latco como Auxiliar de almoxarife.', label: 'Auxiliar de Almoxarife' }
  ];
  }
}
