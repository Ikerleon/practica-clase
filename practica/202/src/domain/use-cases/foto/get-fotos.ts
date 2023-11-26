import { FotoEntity } from '../../entities/foto.entity';
import { FotoRepository } from '../../repositories/foto.repository';

export interface GetFotosUseCase {
  execute(): Promise<FotoEntity[]>;
}

export class GetFotos implements GetFotosUseCase {

  constructor(
    private readonly repository: FotoRepository,
  ) {}

  execute(): Promise<FotoEntity[]> {
    return this.repository.getAll();
  }

}


