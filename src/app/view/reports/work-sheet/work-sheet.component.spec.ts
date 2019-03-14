import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSheetComponent } from './work-sheet.component';

describe('WorkSheetComponent', () => {
  let component: WorkSheetComponent;
  let fixture: ComponentFixture<WorkSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
