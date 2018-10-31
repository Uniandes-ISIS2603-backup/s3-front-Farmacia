import { TransaccionClienteModule } from './transaccion-cliente.module';

describe('TransaccionClienteModule', () => {
  let transaccionClienteModule: TransaccionClienteModule;

  beforeEach(() => {
    transaccionClienteModule = new TransaccionClienteModule();
  });

  it('should create an instance', () => {
    expect(transaccionClienteModule).toBeTruthy();
  });
});