import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponen2Component } from './komponen2.component';

describe('Komponen2Component', () => {
  let component: Komponen2Component;
  let fixture: ComponentFixture<Komponen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komponen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Komponen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
