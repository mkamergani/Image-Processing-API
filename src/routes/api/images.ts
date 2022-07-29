import express from 'express';
import { checkFullImage, processImage } from '../../utilities/ImageProcessing';
import { paramsValidator } from '../../utilities/paramsValidator';

const images = express.Router();

images.get('/', (req, res) => {
  res.send('Welcome to Image Processing API');
});

const middlewares = [paramsValidator, checkFullImage, processImage];
images.get(
  '/resize',
  middlewares,
  (req: express.Request, res: express.Response): void => {
    res.send('Params are good');
  }
);

export default images;
