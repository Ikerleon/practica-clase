import { FotoEntity } from "./foto.entity";
import { MarcaEntity } from "./marca.entity";

export class ProductoEntity {
  constructor(
    public idproducto: number,
    public nombre: string,
    public idCategoria: number,
    public precio: number,
    public marca: MarcaEntity[], 
    public fotos: FotoEntity[],
    public descripcion?: string
  ) {}

  get Marcas() {
    return this.marca;
  }
  get Fotos() {
    return this.fotos;
  }

  public static fromObject(object: { [key: string]: any }): ProductoEntity {
    const { idproducto, nombre, idCategoria, precio, descripcion, marca, fotos } = object;
    
    if (!idproducto) throw 'idproducto es requerido';
    if (!nombre) throw 'nombre es requerido';
    if (!idCategoria) throw 'idCategoria es requerido';
    if (!precio) throw 'precio es requerido';

    return new ProductoEntity(
      idproducto,
      nombre,
      idCategoria,
      precio,
      marca,
      fotos,
      descripcion
    );
  }
}



