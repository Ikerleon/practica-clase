import { UpdateMarcaDto } from '../../dtos';
import { MarcaEntity } from '../../entities/marca.entity';
import { MarcaRepository } from '../../repositories/marca.repository';

export interface UpdateMarcaUseCase {
  execute(dto: UpdateMarcaDto): Promise<MarcaEntity>;
}

export class UpdateMarca implements UpdateMarcaUseCase {

  constructor(
    private readonly repository: MarcaRepository,
  ) {}

  execute(dto: UpdateMarcaDto): Promise<MarcaEntity> {
    return this.repository.updateById(dto);
  }

}


