import { FotoEntity } from '../../entities/foto.entity';
import { FotoRepository } from '../../repositories/foto.repository';

export interface GetFotoUseCase {
  execute(id: number): Promise<FotoEntity>;
}

export class GetFoto implements GetFotoUseCase {

  constructor(
    private readonly repository: FotoRepository,
  ) {}

  execute(idfoto: number): Promise<FotoEntity> {
    return this.repository.findById(idfoto);
  }

}


