import { writeFile } from "fs";

writeFile("./src/app/node/fs/log.text", "hello", (err, data) => {
  if (!err) {
    console.log("Finish");
  }
});
