import express, { Router } from 'express';
import { Controller } from './common/interfaces/controller.interface';
import errorMiddleware from './middlewares/error.middleware';

class App {
  private app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    const port = process.env.PORT || 5000;
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    const router = Router();

    router.get('/', (req, res) => res.send('OK'));

    controllers.forEach(controller => {
      router.use(controller.router);
    });

    this.app.use('/api', router);
  }
}

export default App;
