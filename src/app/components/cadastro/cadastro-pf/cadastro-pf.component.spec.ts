import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPfComponent } from './cadastro-pf.component';

describe('CadastroPfComponent', () => {
  let component: CadastroPfComponent;
  let fixture: ComponentFixture<CadastroPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
