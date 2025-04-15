function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    function onload() {
      resolve(img);
      // prevent memory leak
      img.removeEventListener("load", onload);
      img.removeEventListener("error", onerror);
    }

    function onerror() {
      reject(img);
      // prevent memory leak
      img.removeEventListener("error", onerror);
      img.removeEventListener("load", onload);
    }
    img.src = src;
    img.addEventListener("load", onload);
    img.addEventListener("error", onerror);
  });
}

async function loadImages(srcs: string[]) {
  const images = [];
  for (let i = 0; i < srcs.length; i++) {
    images.push(loadImage(srcs[i]));
  }

  try {
    await Promise.all(images);
    images.length = 0; // free memory
    return true;
  } catch (error) {
    // an image failed to load
    console.error(error);
    images.length = 0;
    return false;
  }
}

export default loadImages;
