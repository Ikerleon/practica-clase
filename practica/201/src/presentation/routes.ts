import { Router } from 'express';

import { fotoRoutes  } from './foto/routes';
import {  marcaRoutes  } from './marca/routes';
import {  productoRoutes  } from './producto/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/foto', fotoRoutes.routes );
    router.use('/api/marca', marcaRoutes.routes );
    router.use('/api/producto', productoRoutes.routes );
    
    return router;
  }


}