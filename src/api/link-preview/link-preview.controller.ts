import { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '@src/common/interfaces/controller.interface';
import BadRequestException from '@src/common/exceptions/bad-request.exception';
import makeResponse from '@src/common/response';
import LinkPreviewService from './link-preview.service';
import { GetMetadataDto } from './dto/getMetadata.dto';

export default class LinkPreviewController implements Controller {
  path = '/link-preview';

  router = Router();

  linkPreviewService = new LinkPreviewService();

  constructor(linkPreviewService: LinkPreviewService) {
    this.linkPreviewService = linkPreviewService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    const router = Router();

    router.get('/', this.getMetadata);

    this.router.use(this.path, router);
  }

  getMetadata = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { url } = req.query as unknown as GetMetadataDto;
      if (!url) {
        throw new BadRequestException('not a valid url');
      }

      const metadata = await this.linkPreviewService.getMetadata(url);

      res.status(200).json(makeResponse({ data: metadata }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
