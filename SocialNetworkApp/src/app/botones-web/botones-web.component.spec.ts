import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesWebComponent } from './botones-web.component';

describe('BotonesWebComponent', () => {
  let component: BotonesWebComponent;
  let fixture: ComponentFixture<BotonesWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
