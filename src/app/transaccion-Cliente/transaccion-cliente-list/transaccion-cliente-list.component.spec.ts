import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionClienteListComponent } from './transaccion-cliente-list.component';

describe('TransaccionProveedorListComponent', () => {
  let component: TransaccionClienteListComponent;
  let fixture: ComponentFixture<TransaccionClienteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionClienteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
