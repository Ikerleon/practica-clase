export class MarcaEntity {
  constructor(
    public idmarca: number,
    public idproducto: number,
    public nombre: string
  ) {}

  public static fromObject(object: { [key: string]: any }): MarcaEntity {
    const { idmarca, idproducto, nombre } = object;

    if (!idmarca) throw 'idmarca es requerido';
    if (!idproducto) throw 'idproducto es requerido';
    if (!nombre) throw 'nombre es requerido';

    return new MarcaEntity(
      idmarca,
      idproducto,
      nombre
    );
  }
}

  
  