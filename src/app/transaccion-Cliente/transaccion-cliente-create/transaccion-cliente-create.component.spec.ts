import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionClienteCreateComponent } from './transaccion-cliente-create.component';

describe('TransaccionClienteCreateComponent', () => {
  let component: TransaccionClienteCreateComponent;
  let fixture: ComponentFixture<TransaccionClienteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionClienteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
