import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleissueComponent } from './vehicleissue.component';

describe('VehicleissueComponent', () => {
  let component: VehicleissueComponent;
  let fixture: ComponentFixture<VehicleissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
