import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarryListImportComponent } from './marry-list-import.component';

describe('MarryListImportComponent', () => {
  let component: MarryListImportComponent;
  let fixture: ComponentFixture<MarryListImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarryListImportComponent]
    });
    fixture = TestBed.createComponent(MarryListImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
