import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMarryComponent } from './sort-marry.component';

describe('SortMarryComponent', () => {
  let component: SortMarryComponent;
  let fixture: ComponentFixture<SortMarryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortMarryComponent]
    });
    fixture = TestBed.createComponent(SortMarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
