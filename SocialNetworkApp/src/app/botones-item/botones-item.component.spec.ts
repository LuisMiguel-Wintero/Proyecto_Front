import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesItemComponent } from './botones-item.component';

describe('BotonesItemComponent', () => {
  let component: BotonesItemComponent;
  let fixture: ComponentFixture<BotonesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
