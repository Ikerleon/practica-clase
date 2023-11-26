import { Router } from 'express';
import { ProductosController } from './controller';
import { ProductoDatasourceImpl } from '../../infrastructure/datasource/producto.datasource.impl';
import { ProductoRepositoryImpl } from '../../infrastructure/repositories/producto.repository.impl';


export class ProductoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new ProductoDatasourceImpl();
    const productoRepository = new ProductoRepositoryImpl( datasource );
    const productoController = new ProductosController(productoRepository);

    router.get('/', productoController.getProductos );
    router.get('/:id', productoController.getProductoById );
    
    router.post('/', productoController.createProducto );
    router.put('/:id', productoController.updateProducto );
    router.delete('/:id', productoController.deleteProducto );


    return router;
  }


}

