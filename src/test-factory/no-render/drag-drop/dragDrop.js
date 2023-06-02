let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  // @see https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#%E6%8C%87%E5%AE%9A%E6%94%BE%E7%BD%AE%E7%9B%AE%E6%A0%87
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  // @see https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#%E6%89%A7%E8%A1%8C%E6%94%BE%E7%BD%AE
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "dropzone") {
    // delate drop source from DOM
    dragged.parentNode.removeChild(dragged);
    // add drop target to DOM
    event.target.appendChild(dragged);
  }
});
