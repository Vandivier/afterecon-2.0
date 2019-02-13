import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ae2TableComponent } from './ae2-table.component';

describe('Ae2TableComponent', () => {
  let component: Ae2TableComponent;
  let fixture: ComponentFixture<Ae2TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ae2TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ae2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
