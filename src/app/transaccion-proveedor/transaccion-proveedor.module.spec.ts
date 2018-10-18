import { TransaccionProveedorModule } from './transaccion-proveedor.module';

describe('TransaccionProveedorModule', () => {
  let transaccionProveedorModule: TransaccionProveedorModule;

  beforeEach(() => {
    transaccionProveedorModule = new TransaccionProveedorModule();
  });

  it('should create an instance', () => {
    expect(transaccionProveedorModule).toBeTruthy();
  });
});
