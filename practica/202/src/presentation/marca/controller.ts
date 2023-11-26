import { Request, Response } from 'express';
import { CreateMarcaDto, UpdateMarcaDto } from '../../domain/dtos';
import { CreateMarca, DeleteMarca, GetMarca, GetMarcas, MarcaRepository, UpdateMarca } from '../../domain';


export class MarcasController {

  //* DI
  constructor(
    private readonly marcaRepository: MarcaRepository,
  ) { }


  public getMarcas = ( req: Request, res: Response ) => {

    new GetMarcas( this.marcaRepository )
      .execute()
      .then( marcas => res.json( marcas ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getMarcaById = ( req: Request, res: Response ) => {
    const idmarca = +req.params.id;

    new GetMarca( this.marcaRepository )
      .execute( idmarca )
      .then( marca => res.json( marca ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createMarca = ( req: Request, res: Response ) => {
    const [ error, createMarcaDto ] = CreateMarcaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateMarca( this.marcaRepository )
      .execute( createMarcaDto! )
      .then( marca => res.json( marca ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateMarca = ( req: Request, res: Response ) => {
    const idmarca = +req.params.id;
    const [ error, updateMarcaDto ] = UpdateMarcaDto.create( { ...req.body, idmarca } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateMarca( this.marcaRepository )
      .execute( updateMarcaDto! )
      .then( marca => res.json( marca ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteMarca = ( req: Request, res: Response ) => {
    const idmarca = +req.params.id;

    new DeleteMarca( this.marcaRepository )
      .execute( idmarca )
      .then( marca => res.json( marca ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 