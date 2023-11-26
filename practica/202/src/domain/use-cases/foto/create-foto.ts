import { CreateFotoDto } from '../../dtos';
import { FotoEntity } from '../../entities/foto.entity';
import { FotoRepository } from '../../repositories/foto.repository';

export interface CreateFotoUseCase {
  execute(dto: CreateFotoDto): Promise<FotoEntity>;
}

export class CreateFoto implements CreateFotoUseCase {

  constructor(
    private readonly repository: FotoRepository,
  ) {}

  execute(dto: CreateFotoDto): Promise<FotoEntity> {
    return this.repository.create(dto);
  }

}


