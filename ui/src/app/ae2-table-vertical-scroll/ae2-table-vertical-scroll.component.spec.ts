import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ae2TableVerticalScrollComponent } from './ae2-table-vertical-scroll.component';

describe('Ae2TableVerticalScrollComponent', () => {
  let component: Ae2TableVerticalScrollComponent;
  let fixture: ComponentFixture<Ae2TableVerticalScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ae2TableVerticalScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ae2TableVerticalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
