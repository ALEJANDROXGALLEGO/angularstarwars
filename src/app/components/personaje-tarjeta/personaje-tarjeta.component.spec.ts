import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeTarjetaComponent } from './personaje-tarjeta.component';

describe('PersonajeTarjetaComponent', () => {
  let component: PersonajeTarjetaComponent;
  let fixture: ComponentFixture<PersonajeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
