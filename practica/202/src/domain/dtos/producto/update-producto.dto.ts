import { UpdateFotoDto } from "../foto/update-foto.dto";
import { UpdateMarcaDto } from "../marca/update_marca.dto";

export class UpdateProductoDto {
  private constructor(
    public readonly idproducto: number,
    public readonly idCategoria?: number,
    public readonly nombre?: string,
    public readonly descripcion?: string,
    public readonly precio?: number,
    public readonly marcaIds?: UpdateMarcaDto[],
    public readonly fotoIds?: UpdateFotoDto[]
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.idCategoria !== undefined) returnObj.idCategoria = this.idCategoria;
    if (this.nombre !== undefined) returnObj.nombre = this.nombre;
    if (this.descripcion !== undefined) returnObj.descripcion = this.descripcion;
    if (this.precio !== undefined) returnObj.precio = this.precio;
    if (this.marcaIds !== undefined) returnObj.marcaIds = this.marcaIds;
    if (this.fotoIds !== undefined) returnObj.fotoIds = this.fotoIds;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateProductoDto?] {
    const { idproducto, idCategoria, nombre, descripcion, precio, marcaIds, fotoIds } = props;

    if (idproducto === undefined || (Object.keys(props).length === 1 && 'id' in props)) {
      return [
        'Se debe proporcionar al menos una propiedad para actualizar, además del ID.',
        undefined
      ];
    }

    return [
      undefined,
      new UpdateProductoDto(
        idproducto,
        idCategoria,
        nombre,
        descripcion,
        precio,
        marcaIds,
        fotoIds
      )
    ];
  }
}

  