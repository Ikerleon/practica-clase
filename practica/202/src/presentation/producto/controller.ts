import { Request, Response } from 'express';
import { CreateProductoDto, UpdateProductoDto } from '../../domain/dtos';
import { CreateProducto, DeleteProducto, GetProducto, GetProductos, ProductoRepository, UpdateProducto } from '../../domain';


export class ProductosController {

  //* DI
  constructor(
    private readonly productoRepository: ProductoRepository,
  ) { }


  public getProductos = ( req: Request, res: Response ) => {

    new GetProductos( this.productoRepository )
      .execute()
      .then( productos => res.json( productos ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getProductoById = ( req: Request, res: Response ) => {
    const idproducto = +req.params.id;

    new GetProducto( this.productoRepository )
      .execute( idproducto )
      .then( producto => res.json( producto ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createProducto = ( req: Request, res: Response ) => {
    const [ error, createProductoDto ] = CreateProductoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateProducto( this.productoRepository )
      .execute( createProductoDto! )
      .then( producto => res.json( producto ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateProducto = ( req: Request, res: Response ) => {
    const idproducto = +req.params.id;
    const [ error, updateProductoDto ] = UpdateProductoDto.create( { ...req.body, idproducto } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateProducto( this.productoRepository )
      .execute( updateProductoDto! )
      .then( producto => res.json( producto ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteProducto = ( req: Request, res: Response ) => {
    const idproducto = +req.params.id;

    new DeleteProducto( this.productoRepository )
      .execute( idproducto )
      .then( producto => res.json( producto ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 