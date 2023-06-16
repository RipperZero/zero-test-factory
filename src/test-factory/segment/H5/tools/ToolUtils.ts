const toImage = (src?: string, width?: number, height?: number) => {
  let image;

  if (!src) return undefined;

  if (width && height) {
    image = new window.Image(width, height);
  } else if (width) {
    image = new window.Image(width);
  } else {
    image = new window.Image();
  }
  image.src = src;

  return image;
};

export { toImage };
