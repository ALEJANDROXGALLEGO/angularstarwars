import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTarjetaComponent } from './pelicula-tarjeta.component';

describe('PeliculaTarjetaComponent', () => {
  let component: PeliculaTarjetaComponent;
  let fixture: ComponentFixture<PeliculaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
