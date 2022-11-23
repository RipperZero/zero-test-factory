// @see https://blog.csdn.net/benben513624/article/details/79205175

const btnOnClick = () => {
  const overlay = document.getElementById("overlay");
  const dialog = document.getElementById("dialog");

  overlay.style.display = "block";
  dialog.style.display = "block";
};

const closeDialog = () => {
  const overlay = document.getElementById("overlay");
  const dialog = document.getElementById("dialog");

  overlay.style.display = "none";
  dialog.style.display = "none";
};
