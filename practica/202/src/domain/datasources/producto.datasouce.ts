import { CreateProductoDto, UpdateProductoDto } from '../dtos';
import { ProductoEntity } from '../entities/producto.entity';

export abstract class ProductoDatasource {

  abstract create(createProductoDto: CreateProductoDto): Promise<ProductoEntity>;

  abstract getAll(): Promise<ProductoEntity[]>;

  abstract findById(idproducto: number): Promise<ProductoEntity>;
  abstract updateById(updateProductoDto: UpdateProductoDto): Promise<ProductoEntity>;
  abstract deleteById(idproducto: number): Promise<ProductoEntity>;

}
