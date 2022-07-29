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
  } else if (isNaN(width)) {
    res.status(400).send('please enter valid params, width must be a Number');
  } else if (isNaN(height)) {
    res.status(400).send('please enter valid params, height must be a Number');
  } else {
    next();
  }
};

export { paramsValidator };
