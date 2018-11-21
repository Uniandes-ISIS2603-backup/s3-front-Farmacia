import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTransaccionClienteEditComponent } from './cliente-transaccion-cliente-edit.component';

describe('ClienteTransaccionClienteEditComponent', () => {
  let component: ClienteTransaccionClienteEditComponent;
  let fixture: ComponentFixture<ClienteTransaccionClienteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTransaccionClienteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTransaccionClienteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 