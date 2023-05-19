import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarryListComponent } from './marry-list.component';

describe('MarryListComponent', () => {
  let component: MarryListComponent;
  let fixture: ComponentFixture<MarryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarryListComponent]
    });
    fixture = TestBed.createComponent(MarryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
