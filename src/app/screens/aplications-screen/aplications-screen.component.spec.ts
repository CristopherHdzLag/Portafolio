import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationsScreenComponent } from './aplications-screen.component';

describe('AplicationsScreenComponent', () => {
  let component: AplicationsScreenComponent;
  let fixture: ComponentFixture<AplicationsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicationsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
