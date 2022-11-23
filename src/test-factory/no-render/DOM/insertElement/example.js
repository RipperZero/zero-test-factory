const insertParagraph = (text) => {
  let str = "<p>";
  str += text;
  str += "</p>";

  document.write(str);
};

window.onload = () => {
  const testdiv = document.getElementById("testdiv");
  // testdiv.innerHTML = '<p style="color: red;">This is <em>my</em> content.</p>';
  const para = document.createElement("p");
  // const info = `nodeName: ${para.nodeName} nodeType: ${para.nodeType}`;
  // alert(info);

  testdiv.appendChild(para);

  const txt = document.createTextNode("Hello World");
  para.appendChild(txt);
};
