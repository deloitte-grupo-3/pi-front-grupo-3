import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrateleiraLivrosComponent } from './prateleira-livros.component';

describe('PrateleiraLivrosComponent', () => {
  let component: PrateleiraLivrosComponent;
  let fixture: ComponentFixture<PrateleiraLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrateleiraLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrateleiraLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
