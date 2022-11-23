// cosnt onLoadFuncArray = []; → ×
// let onLoadFuncArray = []; → ×

// window.onLoadFuncArray = [];
var onLoadFuncArray = [];

const addLoadEvent = (func) => {
  const oldOnload = window.onload;
  window.onLoadFuncArray.push(func);

  if (typeof oldOnload !== "function") {
    window.onload = func;
    return;
  }

  window.onload = () => {
    window.onLoadFuncArray.forEach((element) => element.call());
  };
};

const insertAfter = (newElement, targetElement) => {
  const parent = targetElement.parentNode;

  parent.lastChild === targetElement
    ? parent.appendChild(newElement)
    : parent.insertBefore(newElement, targetElement.nextSibling);
};

const preparePlaceholder = (imgPath) => {
  if (
    !document.createElement ||
    !document.createTextNode ||
    !document.getElementById ||
    !document.getElementById("imagegallery")
  ) {
    return false;
  }

  const placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", imgPath);
  placeholder.setAttribute("alt", "my image gallery");

  const description = document.createElement("p");
  description.setAttribute("id", "description");
  description.appendChild(document.createTextNode("Choose an image"));

  const gallery = document.getElementById("imagegallery");

  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
};

const prepareGallery = () => {
  if (
    !document.getElementsByTagName ||
    !document.getElementById ||
    !document.getElementById("imagegallery")
  ) {
    return false;
  }

  const gallery = document.getElementById("imagegallery");
  const links = gallery.getElementsByTagName("a");
  const linksLength = links.length;

  for (let index = 0; index < linksLength; index++) {
    const element = links[index];

    element.onclick = function () {
      // return showPic(this) ? false : true;
      return !showPic(this);
    };

    element.onkeypress = element.onclick;
  }
};

const showPic = (whichPic) => {
  if (!document.getElementById) {
    return false;
  }

  const palceholder = document.getElementById("placeholder");
  if (!palceholder || palceholder.nodeName !== "IMG") {
    return false;
  }

  // const source = whichPic.href;
  const source = whichPic.getAttribute("href");
  palceholder.setAttribute("src", source);

  const description = document.getElementById("description");
  if (description && description.firstChild.nodeType === 3) {
    const text = whichPic.getAttribute("title") ?? "";
    description.firstChild.nodeValue = text;
  }

  return true;
};

// const countBodyChildren = () => {
//   const body_element = document.getElementsByTagName("body")[0];
//   alert(body_element.childNodes.length);
//   // alert(body_element.nodeType);
// };
// window.onload = countBodyChildren;

// window.onload = () => {
//   prepareGallery();
// };
addLoadEvent(preparePlaceholder("../../../assets/img/Basketball.jpg"));
addLoadEvent(prepareGallery);
