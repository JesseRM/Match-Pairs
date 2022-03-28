import words from "../words";
import imageNames from "../imageNames";

function getValues(type, size, min, max) {
  return new Promise((resolve) => {
    if (type === "word") resolve(getWords(size));
    if (type === "number") resolve(getNumbers(size, min, max));
    if (type === "picture") {
      getImages(size)
        .then((images) => {
          resolve(images);
      });
    }
  });
}

async function getImages(size) {
  const images = [];
  const selectedImgNames = [];

  while (selectedImgNames.length < size) {
    const randNum = Math.floor(Math.random() * imageNames.length);
    const imageName = imageNames[randNum];

    if (selectedImgNames.includes(imageName)) continue;

    selectedImgNames.push(imageName);
  }

  for (let imageName of selectedImgNames) {
    const image = await loadImage(imageName);

    images.push(image);
  }

  return images;
}

function loadImage(imgName) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `./images/${imgName}.png`;
    
    img.onload = () => {
      resolve(img);
    }

    img.onerror = (message) => {
      reject(message);
    }
  });
}

function getNumbers(size, min, max) {
  const nums = [];

  while (nums.length < size) {
    const randNum = String(Math.floor(Math.random() * (max - min + 1) + min));
    
    if (nums.includes(randNum)) continue;

    nums.push(randNum);
  }

  return nums;
}

function getWords(size) {
  const selectedWords = [];

  while (selectedWords.length < size) {
    const randNum = Math.floor(Math.random() * words.length);

    if (selectedWords.includes(words[randNum])) continue;

    selectedWords.push(words[randNum]);
  }

  return selectedWords;
}

export default getValues;