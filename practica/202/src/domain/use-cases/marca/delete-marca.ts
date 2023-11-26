import { MarcaEntity } from '../../entities/marca.entity';
import { MarcaRepository } from '../../repositories/marca.repository';

export interface DeleteMarcaUseCase {
  execute(id: number): Promise<MarcaEntity>;
}

export class DeleteMarca implements DeleteMarcaUseCase {

  constructor(
    private readonly repository: MarcaRepository,
  ) {}

  execute(idmarca: number): Promise<MarcaEntity> {
    return this.repository.deleteById(idmarca);
  }

}

