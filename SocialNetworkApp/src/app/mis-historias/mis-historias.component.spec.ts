import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHistoriasComponent } from './mis-historias.component';

describe('MisHistoriasComponent', () => {
  let component: MisHistoriasComponent;
  let fixture: ComponentFixture<MisHistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisHistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
