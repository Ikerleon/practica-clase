import { CreateMarcaDto, MarcaDatasource, MarcaEntity, MarcaRepository, UpdateMarcaDto } from '../../domain';


export class MarcaRepositoryImpl implements MarcaRepository {

  constructor(
    private readonly datasource: MarcaDatasource,
  ) { }


  create( createMarcaDto: CreateMarcaDto ): Promise<MarcaEntity> {
    return this.datasource.create( createMarcaDto );
  }

  getAll(): Promise<MarcaEntity[]> {
    return this.datasource.getAll();
  }

  findById( idmarca: number ): Promise<MarcaEntity> {
    return this.datasource.findById( idmarca);
  }

  updateById( updateMarcaDto: UpdateMarcaDto ): Promise<MarcaEntity> {
    return this.datasource.updateById( updateMarcaDto );
  }

  deleteById( idmarca: number ): Promise<MarcaEntity> {
    return this.datasource.deleteById( idmarca );
  }

}


