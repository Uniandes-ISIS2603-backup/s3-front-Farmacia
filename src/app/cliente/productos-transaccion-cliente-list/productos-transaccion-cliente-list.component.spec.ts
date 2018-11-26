import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTransaccionClienteListComponent } from './productos-transaccion-cliente-list.component';

describe('ProductosTransaccionClienteListComponent', () => {
  let component: ProductosTransaccionClienteListComponent;
  let fixture: ComponentFixture<ProductosTransaccionClienteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosTransaccionClienteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosTransaccionClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
