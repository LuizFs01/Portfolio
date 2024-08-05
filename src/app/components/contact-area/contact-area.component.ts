import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { SplitterModule } from 'primeng/splitter';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-contact-area',
  standalone: true,
  imports: [ChipModule, ButtonModule, SplitterModule, FloatLabelModule, FormsModule, DividerModule],
  templateUrl: './contact-area.component.html',
  styleUrl: './contact-area.component.sass'
})
export class ContactAreaComponent {
  value: string | undefined;
  name: string;
  phone: string;
  email: string;
  reason: string;

  constructor() {
    this.name = '';
    this.phone = '';
    this.email = '';
    this.reason = '';
  }

  onSubmit() {
    // Lógica para enviar o formulário
    console.log('Nome:', this.name);
    console.log('Telefone:', this.phone);
    console.log('Email:', this.email);
    console.log('Motivo do Contato:', this.reason);
  }
  
  openWhatsApp() {
    window.open('https://wa.me/5546988215938', '_blank');
  }

  sendEmail(domain: string) {
    let emailAddress: string;

    if (domain === 'gmail.com') {
      emailAddress = 'luiz30041998@gmail.com';
    } else if (domain === 'hotmail.com') {
      emailAddress = 'luiz30041998@hotmail.com';
    } else {
      // Email default, se necessário
      emailAddress = 'default@example.com';
    }

    window.location.href = `mailto:${emailAddress}`;
  }

  visitProfile(social: string) {
    let url: string;
  
    if (social === 'facebook') {
      url = 'https://www.facebook.com/LuizHF01/';
    } else if (social === 'instagram') {
      url = 'https://www.instagram.com/luizhf01/';
    } else if (social === 'linkedin') {
      url = 'https://www.linkedin.com/in/luiz-h-freitas/';
    } else if (social === 'github') {
      url = 'https://github.com/LuizHF01';
    } else if (social === 'vercel') {
      url = 'https://vercel.com/luizhf-01';
    } else {
      url = '';
    }
  
    if (url) {
      window.open(url, '_blank');
    }
  }
}



