import { UpdateProductoDto } from '../../dtos';
import { ProductoEntity } from '../../entities/producto.entity';
import { ProductoRepository } from '../../repositories/producto.repository';

export interface UpdateProductoUseCase {
  execute(dto: UpdateProductoDto): Promise<ProductoEntity>;
}

export class UpdateProducto implements UpdateProductoUseCase {

  constructor(
    private readonly repository: ProductoRepository,
  ) {}

  execute(dto: UpdateProductoDto): Promise<ProductoEntity> {
    return this.repository.updateById(dto);
  }

}


