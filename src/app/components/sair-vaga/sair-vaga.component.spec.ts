import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SairVagaComponent } from './sair-vaga.component';

describe('SairVagaComponent', () => {
  let component: SairVagaComponent;
  let fixture: ComponentFixture<SairVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SairVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SairVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
