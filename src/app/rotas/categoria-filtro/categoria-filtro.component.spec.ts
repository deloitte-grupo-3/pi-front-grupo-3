import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaFiltroComponent } from './categoria-filtro.component';

describe('CategoriaFiltroComponent', () => {
  let component: CategoriaFiltroComponent;
  let fixture: ComponentFixture<CategoriaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
