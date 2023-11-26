import { FotoEntity } from '../../entities/foto.entity';
import { FotoRepository } from '../../repositories/foto.repository';

export interface DeleteFotoUseCase {
  execute(id: number): Promise<FotoEntity>;
}

export class DeleteFoto implements DeleteFotoUseCase {

  constructor(
    private readonly repository: FotoRepository,
  ) {}

  execute(idfoto: number): Promise<FotoEntity> {
    return this.repository.deleteById(idfoto);
  }

}


