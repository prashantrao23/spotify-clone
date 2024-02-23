import { useEffect, useState } from 'react';

const ImageColor = ({ imageUrl }) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageUrl;
    image.crossOrigin = 'Anonymous';

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0, image.width, image.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const colorCounts = {};

      for (let i = 0; i < imageData.length; i += 4) {
        const color = `rgb(${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]})`;
        if (colorCounts[color]) {
          colorCounts[color]++;
        } else {
          colorCounts[color] = 1;
        }
      }

      let maxCount = 0;
      let dominantColor = null;

      for (const color in colorCounts) {
        if (colorCounts[color] > maxCount) {
          maxCount = colorCounts[color];
          dominantColor = color;
        }
      }

      resolve(dominantColor);
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};

export default ImageColor;
