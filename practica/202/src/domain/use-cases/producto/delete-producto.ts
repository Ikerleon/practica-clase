import { ProductoEntity } from '../../entities/producto.entity';
import { ProductoRepository } from '../../repositories/producto.repository';

export interface DeleteProductoUseCase {
  execute(id: number): Promise<ProductoEntity>;
}

export class DeleteProducto implements DeleteProductoUseCase {

  constructor(
    private readonly repository: ProductoRepository,
  ) {}

  execute(idproducto: number): Promise<ProductoEntity> {
    return this.repository.deleteById(idproducto);
  }

}


