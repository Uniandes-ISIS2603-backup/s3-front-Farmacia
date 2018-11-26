import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionProveedorEditComponent } from './transaccion-proveedor-edit.component';

describe('TransaccionProveedorEditComponent', () => {
  let component: TransaccionProveedorEditComponent;
  let fixture: ComponentFixture<TransaccionProveedorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionProveedorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionProveedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
