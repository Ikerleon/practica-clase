import { UpdateFotoDto } from '../../dtos';
import { FotoEntity } from '../../entities/foto.entity';
import { FotoRepository } from '../../repositories/foto.repository';

export interface UpdateFotoUseCase {
  execute(dto: UpdateFotoDto): Promise<FotoEntity>;
}

export class UpdateFoto implements UpdateFotoUseCase {

  constructor(
    private readonly repository: FotoRepository,
  ) {}

  execute(dto: UpdateFotoDto): Promise<FotoEntity> {
    return this.repository.updateById(dto);
  }

}


