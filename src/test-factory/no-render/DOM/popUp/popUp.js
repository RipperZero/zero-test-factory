const popUp = (winURL) => {
  window.open(winURL, "popUp", "width=320,height=480");
};

const prepareLinks = () => {
  if (!document.getElementById) {
    return false;
  }

  const links = document.getElementsByTagName("a");

  for (let index = 0; index < links.length; index++) {
    const element = links[index];
    if (element.getAttribute("class") === "popup") {
      element.onclick = () => {
        popUp(element.getAttribute("href"));
        return false;
      };
    }
  }
};

window.onload = prepareLinks;
