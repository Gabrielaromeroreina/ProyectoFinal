import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterComponent } from './veter.component';

describe('VeterComponent', () => {
  let component: VeterComponent;
  let fixture: ComponentFixture<VeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
