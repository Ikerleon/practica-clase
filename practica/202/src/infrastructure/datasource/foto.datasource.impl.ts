import { prisma } from '../../data/postgres';
import { CreateFotoDto, FotoDatasource, FotoEntity, UpdateFotoDto } from '../../domain';




export class FotoDatasourceImpl implements FotoDatasource {

  async create( createFotoDto: CreateFotoDto ): Promise<FotoEntity> {
    const foto = await prisma.foto.create({
      data: createFotoDto!
    });

    return FotoEntity.fromObject( foto );
  }

  async getAll(): Promise<FotoEntity[]> {
    const fotos = await prisma.foto.findMany();
    return fotos.map( foto => FotoEntity.fromObject(foto) );
  }

  async findById( idfoto: number ): Promise<FotoEntity> {
    const foto = await prisma.foto.findFirst({
      where: { idfoto }
    });

    if ( !foto ) throw `Foto con id ${ idfoto } no encontrado`;
    return FotoEntity.fromObject(foto);
  }

  async updateById( updateFotoDto: UpdateFotoDto ): Promise<FotoEntity> {
    await this.findById( updateFotoDto.idfoto );
    
    const updatedFoto = await prisma.foto.update({
      where: { idfoto: updateFotoDto.idfoto },
      data: updateFotoDto!.values
    });

    return FotoEntity.fromObject(updatedFoto);
  }

  async deleteById( idfoto: number ): Promise<FotoEntity> {
    await this.findById( idfoto );
    const deleted = await prisma.foto.delete({
      where: { idfoto }
    });

    return FotoEntity.fromObject( deleted );
  }

}