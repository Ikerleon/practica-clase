import { prisma } from '../../data/postgres';
import { CreateProductoDto, ProductoDatasource, ProductoEntity, UpdateProductoDto } from '../../domain';




export class ProductoDatasourceImpl implements ProductoDatasource {

  async create( createProductoDto: CreateProductoDto ): Promise<ProductoEntity> {
    const { fotoIds,marcaIds, ...rest } =  createProductoDto
    const producto = await prisma.producto.create({
      data: rest
    });

    return ProductoEntity.fromObject( producto );
  }

  async getAll(): Promise<ProductoEntity[]> {
    const productos = await prisma.producto.findMany();
    return productos.map( producto => ProductoEntity.fromObject(producto) );
  }

  async findById( idproducto: number ): Promise<ProductoEntity> {
    const producto = await prisma.producto.findFirst({
      where: { idproducto }
    });

    if ( !producto ) throw `Producto con ${ idproducto } no encontrado`;
    return ProductoEntity.fromObject(producto);
  }

  async updateById( updateProductoDto: UpdateProductoDto ): Promise<ProductoEntity> {
    await this.findById( updateProductoDto.idproducto );
    
    const updatedProducto = await prisma.producto.update({
      where: { idproducto: updateProductoDto.idproducto },
      data: updateProductoDto!.values
    });

    return ProductoEntity.fromObject(updatedProducto);
  }

  async deleteById( idproducto: number ): Promise<ProductoEntity> {
    await this.findById( idproducto );
    const deleted = await prisma.producto.delete({
      where: { idproducto }
    });

    return ProductoEntity.fromObject( deleted );
  }

}