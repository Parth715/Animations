import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BengalsComponent } from './bengals.component';

describe('BengalsComponent', () => {
  let component: BengalsComponent;
  let fixture: ComponentFixture<BengalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BengalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BengalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
