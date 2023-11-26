// DDD
import { Request, Response } from 'express';
import { CreateMarcaDto, UpdateMarcaDto } from '../../domain/dtos';
import { MarcaRepository } from '../../domain';


export class MarcasController {

  //* DI
  constructor(
    private readonly marcaRepository: MarcaRepository,
  ) { }


  public getMarcas = async ( req: Request, res: Response ) => {
    const marcas = await this.marcaRepository.getAll();
    return res.json( marcas );
  };

  public getMarcaById = async ( req: Request, res: Response ) => {
    const idmarca = +req.params.id;

    try {
      const marca = await this.marcaRepository.findById( idmarca );
      res.json( marca );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createMarca = async ( req: Request, res: Response ) => {
    const [ error, createMarcaDto ] = CreateMarcaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const marca = await this.marcaRepository.create( createMarcaDto! );
    res.json( marca );

  };

  public updateMarca = async ( req: Request, res: Response ) => {
    const idmarca = +req.params.id;
    const [ error, updateMarcaDto ] = UpdateMarcaDto.create( { ...req.body, idmarca } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedMarca = await this.marcaRepository.updateById( updateMarcaDto! );
    return res.json( updatedMarca );

  };


  public deleteMarca = async ( req: Request, res: Response ) => {
    const idmarca = +req.params.id;
    const deletedMarca = await this.marcaRepository.deleteById( idmarca );
    res.json( deletedMarca );

  };



}