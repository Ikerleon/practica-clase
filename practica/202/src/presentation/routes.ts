import { Router } from 'express';

import { ProductoRoutes,  } from './producto/routes';
import { MarcaRoutes,  } from './marca/routes';
import { FotoRoutes,  } from './foto/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/productos', ProductoRoutes.routes );
    router.use('/api/marcas', MarcaRoutes.routes );
    router.use('/api/fotos', FotoRoutes.routes );
    
    return router;
  }


}

