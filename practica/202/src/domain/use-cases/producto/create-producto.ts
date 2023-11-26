import { CreateProductoDto } from '../../dtos';
import { ProductoEntity } from '../../entities/producto.entity';
import { ProductoRepository } from '../../repositories/producto.repository';

export interface CreateProductoUseCase {
  execute(dto: CreateProductoDto): Promise<ProductoEntity>;
}

export class CreateProducto implements CreateProductoUseCase {

  constructor(
    private readonly repository: ProductoRepository,
  ) {}

  execute(dto: CreateProductoDto): Promise<ProductoEntity> {
    return this.repository.create(dto);
  }

}


