import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCadastroLayout } from './default-cadastro-layout';

describe('DefaultCadastroLayout', () => {
  let component: DefaultCadastroLayout;
  let fixture: ComponentFixture<DefaultCadastroLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCadastroLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCadastroLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
