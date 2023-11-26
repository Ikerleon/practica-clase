// DDD
import { Request, Response } from 'express';
import { CreateProductoDto, UpdateProductoDto } from '../../domain/dtos';
import { ProductoRepository } from '../../domain';


export class ProductosController {

  //* DI
  constructor(
    private readonly productoRepository: ProductoRepository,
  ) { }


  public getProductos = async ( req: Request, res: Response ) => {
    const productos = await this.productoRepository.getAll();
    return res.json( productos );
  };

  public getProductoById = async ( req: Request, res: Response ) => {
    const idproducto = +req.params.id;

    try {
      const producto = await this.productoRepository.findById( idproducto );
      res.json( producto );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createProducto = async ( req: Request, res: Response ) => {
    const [ error, createProductoDto ] = CreateProductoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const producto = await this.productoRepository.create( createProductoDto! );
    res.json( producto );

  };

  public updateProducto = async ( req: Request, res: Response ) => {
    const idproducto = +req.params.id;
    const [ error, updateProductoDto ] = UpdateProductoDto.create( { ...req.body, idproducto } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedProducto = await this.productoRepository.updateById( updateProductoDto! );
    return res.json( updatedProducto );

  };


  public deleteProducto = async ( req: Request, res: Response ) => {
    const idproducto = +req.params.id;
    const deletedProducto = await this.productoRepository.deleteById( idproducto );
    res.json( deletedProducto );

  };



}