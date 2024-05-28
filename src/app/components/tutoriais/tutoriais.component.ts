import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutoriais',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tutoriais.component.html',
  styleUrl: './tutoriais.component.scss'
})
export class TutoriaisComponent {
  constructor(
    private router: Router
  ) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  items = [
    {
      route: '/entrar-vaga',
      image: 'https://i.imgur.com/dVh2ASA.jpeg',
      alt: 'Imagem Entrar na Vaga',
      title: 'Entrar na Vaga',
      text: 'Clique para ver o tutorial'
    },
    {
      route: '/sair-vaga',
      image: 'https://i.imgur.com/li76Bvj.jpeg',
      alt: 'Imagem Sair da Vaga',
      title: 'Sair da Vaga',
      text: 'Clique para ver o tutorial'
    }
    // adicione mais cards aqui...
  ];
}
