import { MarcaEntity } from '../../entities/marca.entity';
import { MarcaRepository } from '../../repositories/marca.repository';

export interface GetMarcasUseCase {
  execute(): Promise<MarcaEntity[]>;
}

export class GetMarcas implements GetMarcasUseCase {

  constructor(
    private readonly repository: MarcaRepository,
  ) {}

  execute(): Promise<MarcaEntity[]> {
    return this.repository.getAll();
  }

}


