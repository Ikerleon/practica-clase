export class CreateFotoDto {
  constructor(
    public readonly idproducto: number,
    public readonly archivo: string,
    public readonly descripcion?: string
  ) {}

  static create(props: {
    idproducto: number;
    archivo: string;
    descripcion?: string;
  }): [string?, CreateFotoDto?] {
    const { idproducto, archivo, descripcion } = props;

    if (
      !idproducto ||
      typeof idproducto !== 'number' ||
      !archivo ||
      typeof archivo !== 'string'
    ) {
      return [
        'Entrada no válida. Verifique los campos de la foto.',
        undefined
      ];
    }

    return [undefined, new CreateFotoDto(idproducto, archivo, descripcion)];
  }
}

  