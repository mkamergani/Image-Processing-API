import sharp from 'sharp';
import { resizeImage } from '../utilities/ImageProcessing';

// const metadata = await sharp(`./images/full/${fileName}.jpg`).metadata();

describe('Testing Image Processing', (): void => {
  const fileName = 'fjord';
  const width = 400;
  const height = 400;
  it('expects resizeImage() to create new file with the width and heigt provided', async (): Promise<void> => {
    await resizeImage(fileName, width, height);
    const metadata = await sharp(
      `images/thumbs/${fileName}_${width}_${height}.jpg`
    ).metadata();
    console.log(metadata);
    expect(metadata.height).toBe(400);
  });
});
