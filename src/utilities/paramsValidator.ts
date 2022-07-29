import express from 'express';

const paramsValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const fileName = req.query.filename;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  if (!fileName || !width || !height) {
    res.status(400).send('please enter valid params');
  } else if (isNaN(width) || width <= 0) {
    res
      .status(400)
      .send('please enter valid width, width must be a Number greater than 0');
  } else if (isNaN(height) || height <= 0) {
    res
      .status(400)
      .send(
        'please enter valid height, height must be a Number greater than 0'
      );
  } else {
    next();
  }
};

export { paramsValidator };
