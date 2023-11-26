import { CreateProductoDto, ProductoDatasource, ProductoEntity, ProductoRepository, UpdateProductoDto } from '../../domain';


export class ProductoRepositoryImpl implements ProductoRepository {

  constructor(
    private readonly datasource: ProductoDatasource,
  ) { }


  create( createProductoDto: CreateProductoDto ): Promise<ProductoEntity> {
    return this.datasource.create( createProductoDto );
  }

  getAll(): Promise<ProductoEntity[]> {
    return this.datasource.getAll();
  }

  findById( idproducto: number ): Promise<ProductoEntity> {
    return this.datasource.findById( idproducto );
  }

  updateById( updateProductoDto: UpdateProductoDto ): Promise<ProductoEntity> {
    return this.datasource.updateById( updateProductoDto );
  }

  deleteById( idproducto: number ): Promise<ProductoEntity> {
    return this.datasource.deleteById( idproducto );
  }

}


