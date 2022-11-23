// @see https://blog.csdn.net/weixin_37580235/article/details/82291028

// 点击弹出按钮
const popBox = () => {
  const popBox = document.getElementById("popBox");
  const popLayer = document.getElementById("popLayer");

  popBox.style.display = "block";
  popLayer.style.display = "block";
};

// 点击关闭按钮
const closeBox = () => {
  const popBox = document.getElementById("popBox");
  const popLayer = document.getElementById("popLayer");

  popBox.style.display = "none";
  popLayer.style.display = "none";
};

// 点击遮罩层
const popLayer = closeBox;
