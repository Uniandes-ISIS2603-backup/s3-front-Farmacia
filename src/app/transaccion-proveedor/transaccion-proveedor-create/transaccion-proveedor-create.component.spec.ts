import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionProveedorCreateComponent } from './transaccion-proveedor-create.component';

describe('TransaccionProveedorCreateComponent', () => {
  let component: TransaccionProveedorCreateComponent;
  let fixture: ComponentFixture<TransaccionProveedorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionProveedorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionProveedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
