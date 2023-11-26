import { CreateMarcaDto, UpdateMarcaDto } from '../dtos';
import { MarcaEntity } from '../entities/marca.entity';

export abstract class MarcaRepository {

  abstract create(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity>;

  abstract getAll(): Promise<MarcaEntity[]>;

  abstract findById(idmarca: number): Promise<MarcaEntity>;
  abstract updateById(updateMarcaDto: UpdateMarcaDto): Promise<MarcaEntity>;
  abstract deleteById(idmarca: number): Promise<MarcaEntity>;

}
