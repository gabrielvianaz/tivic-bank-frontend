import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosContaComponent } from './dados-conta.component';

describe('DadosContaComponent', () => {
  let component: DadosContaComponent;
  let fixture: ComponentFixture<DadosContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
