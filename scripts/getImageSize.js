import fs from 'fs';
import { imageSizeFromFile } from 'image-size';

const file = process.argv[2];

try {
  const dimensions = await imageSizeFromFile(file);
  console.log(JSON.stringify({ name: file.split('/').pop(), width: dimensions.width, height: dimensions.height }));
} catch (err) {
  console.log(
    JSON.stringify({
      name: file.split('/').pop()
    })
  ); // fallback for non-image
}
