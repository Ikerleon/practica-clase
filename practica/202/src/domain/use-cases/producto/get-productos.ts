import { ProductoEntity } from '../../entities/producto.entity';
import { ProductoRepository } from '../../repositories/producto.repository';

export interface GetProductosUseCase {
  execute(): Promise<ProductoEntity[]>;
}

export class GetProductos implements GetProductosUseCase {

  constructor(
    private readonly repository: ProductoRepository,
  ) {}

  execute(): Promise<ProductoEntity[]> {
    return this.repository.getAll();
  }

}


