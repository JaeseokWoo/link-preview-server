import App from './app';
import LinkPreviewController from './api/link-preview/link-preview.controller';
import LinkPreviewService from './api/link-preview/link-preview.service';

async function startServer() {
  const app = new App([new LinkPreviewController(new LinkPreviewService())]);

  app.listen();
}

startServer();
