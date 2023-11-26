import { CreateFotoDto, UpdateFotoDto } from '../dtos';
import { FotoEntity } from '../entities/foto.entity';

export abstract class FotoDatasource {

  abstract create(createFotoDto: CreateFotoDto): Promise<FotoEntity>;

  abstract getAll(): Promise<FotoEntity[]>;

  abstract findById(idfoto: number): Promise<FotoEntity>;
  abstract updateById(updateFotoDto: UpdateFotoDto): Promise<FotoEntity>;
  abstract deleteById(idfoto: number): Promise<FotoEntity>;

}

