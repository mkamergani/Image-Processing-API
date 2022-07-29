import express from 'express';

const paramsValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const fileName = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  if (!fileName || !width || !height) {
    res.status(400).send('please enter valid params');
  } else {
    next();
  }
};

export { paramsValidator };
