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

const getNewContent = () => {
  const request = new XMLHttpRequest();

  // add to Chrome.exe
  // [ --disable-web-security --user-data-dir="D:\Chrome_No_Security"]
  request.open("GET", "example.txt", true);
  // request.open("GET", "http://localhost:8090/zero", true);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      const para = document.createElement("p");
      const text = document.createTextNode(request.responseText);

      para.appendChild(text);
      document.getElementById("new").appendChild(para);
    }
  };
  request.send(null);
};

addLoadEvent(getNewContent);
