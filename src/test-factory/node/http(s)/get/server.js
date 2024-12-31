// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const { createServer, get } = require("http");
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const { parse } = require("querystring");

const server = createServer((request, response) => {
  // let data = "";

  // request.on("data", (chunk) => {
  //   data += chunk;
  // });

  // request.on("end", () => {
  //   response.writeHead(200, {
  //     "content-type": "application/json;charset=utf-8",
  //   });
  //   response.write(JSON.stringify(parse(data)));
  //   response.end();
  // });

  get("http://localhost:8080/test", (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      response.writeHead(200, {
        "content-type": "application/json;charset=utf-8",
      });
      response.write(data);
      response.end();
    });
  });
});

server.listen(8090, "localhost", () => {
  console.log("localhost:8090");
});
