import { MarcaEntity } from '../../entities/marca.entity';
import { MarcaRepository } from '../../repositories/marca.repository';

export interface GetMarcaUseCase {
  execute(id: number): Promise<MarcaEntity>;
}

export class GetMarca implements GetMarcaUseCase {

  constructor(
    private readonly repository: MarcaRepository,
  ) {}

  execute(idmarca: number): Promise<MarcaEntity> {
    return this.repository.findById(idmarca);
  }

}


