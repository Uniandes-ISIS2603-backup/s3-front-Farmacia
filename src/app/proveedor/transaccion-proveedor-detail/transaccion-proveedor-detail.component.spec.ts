import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionProveedorDetailComponent } from './transaccion-proveedor-detail.component';

describe('TransaccionProveedorDetailComponent', () => {
  let component: TransaccionProveedorDetailComponent;
  let fixture: ComponentFixture<TransaccionProveedorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionProveedorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionProveedorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
