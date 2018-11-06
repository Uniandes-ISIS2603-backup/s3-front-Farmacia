import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionClienteDetailComponent } from './transaccion-cliente-detail.component';

describe('TransaccionClienteDetailComponent', () => {
  let component: TransaccionClienteDetailComponent;
  let fixture: ComponentFixture<TransaccionClienteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionClienteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionClienteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
