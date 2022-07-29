import express from 'express';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';
import sharp from 'sharp';

const checkFullImage = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const fileName = req.query.filename;
  if (fs.existsSync(`images/full/${fileName}.jpg`)) {
    next();
  } else {
    res.status(400).send("Image doesn't exist");
  }
};

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  if (!fs.existsSync('images/thumbs')) {
    await fsPromises.mkdir('images/thumbs');
  }
  await sharp(`./images/full/${fileName}.jpg`)
    .resize({
      width,
      height
    })
    .toFile(`images/thumbs/${fileName}_${width}_${height}.jpg`);
};

const processImage = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const fileName = req.query.filename as unknown as string;
    const width = parseInt(req.query.width as unknown as string);
    const height = parseInt(req.query.height as unknown as string);

    if (fs.existsSync(`images/thumbs/${fileName}_${width}_${height}.jpg`)) {
      res.sendFile(
        path.resolve(`./images/thumbs/${fileName}_${width}_${height}.jpg`)
      );
    } else {
      await resizeImage(fileName, width, height);
      res.sendFile(
        path.resolve(`./images/thumbs/${fileName}_${width}_${height}.jpg`)
      );
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export { processImage, checkFullImage, resizeImage };
