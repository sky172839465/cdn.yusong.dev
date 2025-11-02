import fs from 'fs';
import sizeOf from 'image-size';

const file = process.argv[2];

try {
  const dimensions = sizeOf(file);
  console.log(JSON.stringify({ name: file.split('/').pop(), width: dimensions.width, height: dimensions.height }));
} catch (err) {
  console.log(
    JSON.stringify({
      name: JSON.stringify(file.split('/').pop())
    })
  ); // fallback for non-image
}
