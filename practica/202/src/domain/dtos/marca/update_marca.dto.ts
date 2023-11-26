export class UpdateMarcaDto {
  private constructor(
    public readonly idmarca: number,
    public readonly idproducto?: number,
    public readonly nombre?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.idproducto !== undefined) returnObj.idproducto = this.idproducto;
    if (this.nombre !== undefined) returnObj.nombre = this.nombre;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateMarcaDto?] {
    const { idmarca, idproducto, nombre } = props;

    if (idmarca === undefined || (Object.keys(props).length === 1 && 'id' in props)) {
      return [
        'Se debe proporcionar al menos una propiedad para actualizar, además del ID.',
        undefined
      ];
    }

    return [
      undefined,
      new UpdateMarcaDto(
        idmarca,
        idproducto,
        nombre
      )
    ];
  }
}

  