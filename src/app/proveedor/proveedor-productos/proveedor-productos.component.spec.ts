import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorProductosComponent } from './proveedor-productos.component';

describe('ProveedorProductosComponent', () => {
  let component: ProveedorProductosComponent;
  let fixture: ComponentFixture<ProveedorProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
