import { prisma } from '../../data/postgres';
import { CreateMarcaDto, MarcaDatasource, MarcaEntity, UpdateMarcaDto } from '../../domain';




export class MarcaDatasourceImpl implements MarcaDatasource {

  async create( createMarcaDto: CreateMarcaDto ): Promise<MarcaEntity> {
    const marca = await prisma.marca.create({
      data: createMarcaDto!
    });

    return MarcaEntity.fromObject( marca );
  }

  async getAll(): Promise<MarcaEntity[]> {
    const marcas = await prisma.marca.findMany();
    return marcas.map( marca => MarcaEntity.fromObject(marca) );
  }

  async findById( idmarca: number ): Promise<MarcaEntity> {
    const marca = await prisma.marca.findFirst({
      where: { idmarca }
    });

    if ( !marca ) throw `Marca con id ${ idmarca } no encontrado`;
    return MarcaEntity.fromObject(marca);
  }

  async updateById( updateMarcaDto: UpdateMarcaDto ): Promise<MarcaEntity> {
    await this.findById( updateMarcaDto.idmarca );
    
    const updatedMarca = await prisma.marca.update({
      where: { idmarca: updateMarcaDto.idmarca },
      data: updateMarcaDto!.values
    });

    return MarcaEntity.fromObject(updatedMarca);
  }

  async deleteById( idmarca: number ): Promise<MarcaEntity> {
    await this.findById( idmarca );
    const deleted = await prisma.marca.delete({
      where: { idmarca }
    });

    return MarcaEntity.fromObject( deleted );
  }

}