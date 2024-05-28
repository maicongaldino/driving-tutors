import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { RodapeComponent } from "./components/rodape/rodape.component";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EntrarVagaComponent } from './components/entrar-vaga/entrar-vaga.component';
import { SairVagaComponent } from './components/sair-vaga/sair-vaga.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TabsModule, CabecalhoComponent, RodapeComponent, EntrarVagaComponent, SairVagaComponent]
})
export class AppComponent {
  title = 'driving-tutors';
  protected darkMode: boolean = true;

  onDarkModeToggle(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    document.body.classList.toggle('light-mode', !this.darkMode);
  }
}
