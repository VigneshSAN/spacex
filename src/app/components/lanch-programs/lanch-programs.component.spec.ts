import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchProgramsComponent } from './lanch-programs.component';

describe('LanchProgramsComponent', () => {
  let component: LanchProgramsComponent;
  let fixture: ComponentFixture<LanchProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
