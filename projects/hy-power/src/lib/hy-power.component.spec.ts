import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyPowerComponent } from './hy-power.component';

describe('HyPowerComponent', () => {
  let component: HyPowerComponent;
  let fixture: ComponentFixture<HyPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
