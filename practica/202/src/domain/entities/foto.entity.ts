export class FotoEntity {
  constructor(
    public idfoto: number,
    public idproducto: number,
    public archivo: string,
    public descripcion?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): FotoEntity {
    const { idfoto, idproducto, archivo, descripcion } = object;

    if (!idfoto) throw 'idfoto es requerido';
    if (!idproducto) throw 'idproducto es requerido';
    if (!archivo) throw 'archivo es requerido';

    return new FotoEntity(
      idfoto,
      idproducto,
      archivo,
      descripcion
    );
  }
}

  
  
  