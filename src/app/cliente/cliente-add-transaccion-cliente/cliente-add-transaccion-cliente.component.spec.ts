import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddTransaccionClienteComponent } from './cliente-add-transaccion-cliente.component';

describe('ClienteAddTransaccionClienteComponent', () => {
  let component: ClienteAddTransaccionClienteComponent;
  let fixture: ComponentFixture<ClienteAddTransaccionClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddTransaccionClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddTransaccionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
