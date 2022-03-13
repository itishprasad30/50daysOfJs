let isInitialLoad = true;

const imgCount = 5;
let unsplashApi = `https://theodorus-clarence-proxy.herokuapp.com/unsp/${imgCount}`;

let images = [];
let isLoaded = false;
let imagesLoaded = 0;
let totalImages = 0;

//Elements
const imageContainer = document.getElementById("images");
const loader = document.getElementById("loader");
const topBtn = document.getElementById("to-top");

function updateInitialCount(count) {
  unsplashApi = `https://theodorus-clarence-proxy.herokuapp.com/unsp/${imgCount}`;
}

//check if all images are loaded
const imgLoader = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    loader.hidden = true;
    isLoaded = true;
  }
};

const getImage = async () => {
  try {
    const response = await fetch(unsplashApi);
    images = await response.json();
    displayImage();
    if (isInitialLoad) {
      isInitialLoad = false;
      updateInitialCount(30);
    }
  } catch (e) {
    console.log(e);
  }
};

//Helper for setting attribute
const setAttr = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const displayImage = () => {
  totalImages = images.length;
  imagesLoaded = 0;
  images.forEach((image) => {
    //Create <a> tag
    const imgItem = document.createElement("a");
    setAttr(imgItem, {
      href: image.links.html,
      target: "__blank",
    });

    //Create <img> tag
    const img = document.createElement("img");
    setAttr(img, {
      src: image.urls.regular,
      alt: image.alt_description,
      title: image.alt_description,
      class: "image__item",
    });

    //Event Listener
    img.addEventListener("load", imgLoader);

    //put <a><img></a>, then put them in the image container
    imgItem.appendChild(img);
    imageContainer.appendChild(imgItem);
  });
};

// Scroll handling
window.addEventListener("scroll", () => {
  const documentHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrolledHeight = window.scrollY;
  if (windowHeight + scrolledHeight >= documentHeight - 1000 && isLoaded) {
    isLoaded = false;
    getImage();
  }

  //back to top functionality
  if (scrolledHeight > 20) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

getImage();
