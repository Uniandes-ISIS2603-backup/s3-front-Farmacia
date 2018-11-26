import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionProveedorProductosComponent } from './transaccion-proveedor-productos.component';

describe('TransaccionProveedorProductosComponent', () => {
  let component: TransaccionProveedorProductosComponent;
  let fixture: ComponentFixture<TransaccionProveedorProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionProveedorProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionProveedorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
