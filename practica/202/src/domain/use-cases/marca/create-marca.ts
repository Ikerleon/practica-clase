import { CreateMarcaDto } from '../../dtos';
import { MarcaEntity } from '../../entities/marca.entity';
import { MarcaRepository } from '../../repositories/marca.repository';

export interface CreateMarcaUseCase {
  execute(dto: CreateMarcaDto): Promise<MarcaEntity>;
}

export class CreateMarca implements CreateMarcaUseCase {

  constructor(
    private readonly repository: MarcaRepository,
  ) {}

  execute(dto: CreateMarcaDto): Promise<MarcaEntity> {
    return this.repository.create(dto);
  }

}


