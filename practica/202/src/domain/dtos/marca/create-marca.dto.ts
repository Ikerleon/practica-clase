export class CreateMarcaDto {
  constructor(
    public readonly idproducto: number,
    public readonly nombre: string
  ) {}

  static create(props: {
    idproducto: number;
    nombre: string;
  }): [string?, CreateMarcaDto?] {
    const { idproducto, nombre } = props;

    if (
      !idproducto ||
      typeof idproducto !== 'number' ||
      !nombre ||
      typeof nombre !== 'string'
    ) {
      return [
        'Entrada no válida. Verifique los campos de la marca.',
        undefined
      ];
    }

    return [undefined, new CreateMarcaDto(idproducto, nombre)];
  }
}

  