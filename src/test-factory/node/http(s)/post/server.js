const { createServer, request } = require("http");
const { stringify } = require("querystring");

const postData = {
  province: "上海",
  city: "上海",
  district: "宝山区",
  address: "同济支路199号智慧七立方3号楼2-4层",
  latitude: 43.0,
  longitude: 160.0,
  message: "求购一条小鱼",
  contact: "13666666",
  type: "sell",
  time: 1571217561,
};

const options = {
  protocol: "http:",
  hostname: "localhost",
  method: "post",
  port: "8080",
  path: "/data",
  headers: {
    "Content-Type": "application/json",
  },
};

const doPost = () => {
  const req = request(options);

  req.write(JSON.stringify(postData));
  req.end();
};

const server = createServer((_req, res) => {
  console.log("8090innn");

  setInterval(doPost, 1000);

  res.end();
});

server.listen(8090, () => {
  console.log("localhost:8090");
});
