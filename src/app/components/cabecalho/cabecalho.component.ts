import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  @Output() darkModeToggle = new EventEmitter<boolean>();
  isDarkMode: boolean = true;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeToggle.emit(this.isDarkMode);
  }
}
