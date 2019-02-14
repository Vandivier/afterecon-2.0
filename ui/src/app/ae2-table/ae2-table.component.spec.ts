import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ae2TableComponent } from './ae2-table.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ServiceBaseService } from 'src/app/service-base/service-base.service';
import { ServiceStateService } from 'src/app/service-state/service-state.service';
import { ServiceUrlManagerService } from 'src/app/service-url-manager/service-url-manager.service';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';

describe('Ae2TableComponent', () => {
  let component: Ae2TableComponent;
  let fixture: ComponentFixture<Ae2TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [Ae2TableComponent],
      providers: [ServiceBaseService, ServiceStateService, ServiceUrlManagerService],
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

  it('should ask about pagination', () => {
    const fixture = TestBed.createComponent(Ae2TableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.ae2-table-pagination-selector-label').textContent).toContain('How many records would you like to view on each page?');
  });
});
