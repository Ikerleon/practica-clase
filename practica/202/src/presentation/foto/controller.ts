import { Request, Response } from 'express';
import { CreateFotoDto, UpdateFotoDto } from '../../domain/dtos';
import { CreateFoto, DeleteFoto, GetFoto, GetFotos, FotoRepository, UpdateFoto } from '../../domain';


export class FotosController {

  //* DI
  constructor(
    private readonly fotoRepository: FotoRepository,
  ) { }


  public getFotos = ( req: Request, res: Response ) => {

    new GetFotos( this.fotoRepository )
      .execute()
      .then( fotos => res.json( fotos ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getFotoById = ( req: Request, res: Response ) => {
    const idfoto = +req.params.id;

    new GetFoto( this.fotoRepository )
      .execute( idfoto )
      .then( foto => res.json( foto ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createFoto = ( req: Request, res: Response ) => {
    const [ error, createFotoDto ] = CreateFotoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateFoto( this.fotoRepository )
      .execute( createFotoDto! )
      .then( foto => res.json( foto ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateFoto = ( req: Request, res: Response ) => {
    const idfoto = +req.params.id;
    const [ error, updateFotoDto ] = UpdateFotoDto.create( { ...req.body, idfoto } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateFoto( this.fotoRepository )
      .execute( updateFotoDto! )
      .then( foto => res.json( foto ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteFoto = ( req: Request, res: Response ) => {
    const idfoto = +req.params.id;

    new DeleteFoto( this.fotoRepository )
      .execute( idfoto )
      .then( foto => res.json( foto ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 