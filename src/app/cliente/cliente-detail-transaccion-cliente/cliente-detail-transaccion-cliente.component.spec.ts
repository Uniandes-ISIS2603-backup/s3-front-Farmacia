import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetailTransaccionClienteComponent } from './cliente-detail-transaccion-cliente.component';

describe('ClienteDetailTransaccionClienteComponent', () => {
  let component: ClienteDetailTransaccionClienteComponent;
  let fixture: ComponentFixture<ClienteDetailTransaccionClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetailTransaccionClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetailTransaccionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
