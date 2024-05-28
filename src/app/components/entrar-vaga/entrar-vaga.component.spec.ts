import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarVagaComponent } from './entrar-vaga.component';

describe('EntrarVagaComponent', () => {
  let component: EntrarVagaComponent;
  let fixture: ComponentFixture<EntrarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrarVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
