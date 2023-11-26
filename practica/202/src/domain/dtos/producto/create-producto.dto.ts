import { CreateFotoDto } from "../foto/create-foto.dto";
import { CreateMarcaDto } from "../marca/create-marca.dto";

export class CreateProductoDto {
  constructor(
    public readonly idCategoria: number,
    public readonly nombre: string,
    public readonly precio: number,
    public readonly marcaIds: CreateMarcaDto[], 
    public readonly fotoIds: CreateFotoDto[], 
    public readonly descripcion?: string 
  ) {}

  static create(props: {
    idCategoria: number;
    nombre: string;
    precio: number;
    marcaIds: CreateMarcaDto[];
    fotoIds: CreateFotoDto[];
    descripcion?: string;
  }): [string?, CreateProductoDto?] {
    const { idCategoria, nombre, precio, marcaIds, fotoIds, descripcion } = props;

    if (
      !idCategoria ||
      typeof idCategoria !== 'number' ||
      !nombre ||
      typeof nombre !== 'string' ||
      !precio ||
      typeof precio !== 'number' ||
      !marcaIds ||
      !Array.isArray(marcaIds) ||
      !fotoIds ||
      !Array.isArray(fotoIds)
    ) {
      return [
        'Entrada no válida. Verifique los campos del producto.',
        undefined
      ];
    }

    // Additional validation for other fields if needed

    return [
      undefined,
      new CreateProductoDto(
        idCategoria,
        nombre,
        precio,
        marcaIds,
        fotoIds,
        descripcion
      )
    ];
  }
}


  