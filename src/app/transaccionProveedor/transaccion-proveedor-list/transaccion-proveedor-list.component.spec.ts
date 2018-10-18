import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionProveedorListComponent } from './transaccion-proveedor-list.component';

describe('TransaccionProveedorListComponent', () => {
  let component: TransaccionProveedorListComponent;
  let fixture: ComponentFixture<TransaccionProveedorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionProveedorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionProveedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
