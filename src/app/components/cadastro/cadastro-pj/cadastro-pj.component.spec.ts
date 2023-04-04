import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPjComponent } from './cadastro-pj.component';

describe('CadastroPjComponent', () => {
  let component: CadastroPjComponent;
  let fixture: ComponentFixture<CadastroPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
