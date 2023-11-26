import { CreateFotoDto, FotoDatasource, FotoEntity, FotoRepository, UpdateFotoDto } from '../../domain';


export class FotoRepositoryImpl implements FotoRepository {

  constructor(
    private readonly datasource: FotoDatasource,
  ) { }


  create( createFotoDto: CreateFotoDto ): Promise<FotoEntity> {
    return this.datasource.create( createFotoDto );
  }

  getAll(): Promise<FotoEntity[]> {
    return this.datasource.getAll();
  }

  findById( idfoto: number ): Promise<FotoEntity> {
    return this.datasource.findById( idfoto );
  }

  updateById( updateFotoDto: UpdateFotoDto ): Promise<FotoEntity> {
    return this.datasource.updateById( updateFotoDto );
  }

  deleteById( idfoto: number ): Promise<FotoEntity> {
    return this.datasource.deleteById( idfoto );
  }

}


