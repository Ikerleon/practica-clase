export class UpdateFotoDto {
  private constructor(
    public readonly idfoto: number,
    public readonly idproducto?: number,
    public readonly archivo?: string,
    public readonly descripcion?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.idproducto !== undefined) returnObj.idproducto = this.idproducto;
    if (this.archivo !== undefined) returnObj.archivo = this.archivo;
    if (this.descripcion !== undefined) returnObj.descripcion = this.descripcion;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateFotoDto?] {
    const { idfoto, idproducto, archivo, descripcion } = props;

    if (idfoto === undefined || (Object.keys(props).length === 1 && 'id' in props)) {
      return [
        'Se debe proporcionar al menos una propiedad para actualizar, además del ID.',
        undefined
      ];
    }

    return [
      undefined,
      new UpdateFotoDto(
        idfoto,
        idproducto,
        archivo,
        descripcion
      )
    ];
  }
}

  