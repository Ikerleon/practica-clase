// DDD
import { Request, Response } from 'express';
import { CreateFotoDto, UpdateFotoDto } from '../../domain/dtos';
import { FotoRepository } from '../../domain';


export class FotosController {

  //* DI
  constructor(
    private readonly fotoRepository: FotoRepository,
  ) { }


  public getFotos = async ( req: Request, res: Response ) => {
    const fotos = await this.fotoRepository.getAll();
    return res.json( fotos );
  };

  public getFotoById = async ( req: Request, res: Response ) => {
    const idfoto = +req.params.id;

    try {
      const foto = await this.fotoRepository.findById( idfoto );
      res.json( foto );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createFoto = async ( req: Request, res: Response ) => {
    const [ error, createFotoDto ] = CreateFotoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const foto = await this.fotoRepository.create( createFotoDto! );
    res.json( foto );

  };

  public updateFoto = async ( req: Request, res: Response ) => {
    const idfoto = +req.params.id;
    const [ error, updateFotoDto ] = UpdateFotoDto.create( { ...req.body, idfoto } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedFoto = await this.fotoRepository.updateById( updateFotoDto! );
    return res.json( updatedFoto );

  };


  public deleteFoto = async ( req: Request, res: Response ) => {
    const idfoto = +req.params.id;
    const deletedFoto = await this.fotoRepository.deleteById( idfoto );
    res.json( deletedFoto );

  };



}