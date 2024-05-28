import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntrarVagaComponent } from './components/entrar-vaga/entrar-vaga.component';
import { SairVagaComponent } from './components/sair-vaga/sair-vaga.component';
import { TutoriaisComponent } from './components/tutoriais/tutoriais.component';

export const routes: Routes = [
  { path: '', component: TutoriaisComponent },
  { path: 'entrar-vaga', component: EntrarVagaComponent },
  { path: 'sair-vaga', component: SairVagaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
