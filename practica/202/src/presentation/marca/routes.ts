import { Router } from 'express';
import { MarcasController } from './controller';
import { MarcaDatasourceImpl } from '../../infrastructure/datasource/marca.datasource.impl';
import { MarcaRepositoryImpl } from '../../infrastructure/repositories/marca.repository.impl';


export class MarcaRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new MarcaDatasourceImpl();
    const marcaRepository = new MarcaRepositoryImpl( datasource );
    const marcaController = new MarcasController(marcaRepository);

    router.get('/', marcaController.getMarcas );
    router.get('/:id', marcaController.getMarcaById );
    
    router.post('/', marcaController.createMarca );
    router.put('/:id', marcaController.updateMarca );
    router.delete('/:id', marcaController.deleteMarca );


    return router;
  }


}

