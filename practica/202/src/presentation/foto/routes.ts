import { Router } from 'express';
import { FotosController } from './controller';
import { FotoDatasourceImpl } from '../../infrastructure/datasource/foto.datasource.impl';
import { FotoRepositoryImpl } from '../../infrastructure/repositories/foto.repository.impl';


export class FotoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new FotoDatasourceImpl();
    const fotoRepository = new FotoRepositoryImpl( datasource );
    const fotoController = new FotosController(fotoRepository);

    router.get('/', fotoController.getFotos );
    router.get('/:id', fotoController.getFotoById );
    
    router.post('/', fotoController.createFoto );
    router.put('/:id', fotoController.updateFoto );
    router.delete('/:id', fotoController.deleteFoto );


    return router;
  }


}

