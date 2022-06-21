import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrocodeComponent } from './electrocode.component';

describe('ElectrocodeComponent', () => {
  let component: ElectrocodeComponent;
  let fixture: ComponentFixture<ElectrocodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectrocodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
