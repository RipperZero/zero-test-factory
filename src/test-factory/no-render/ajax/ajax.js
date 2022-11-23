const getJSON = (url) => {
  const promise = new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    // 需要运行环境(上下文 → 控制台)
    const client = new XMLHttpRequest();
    client.open("GET", url);
    // XMLHttpRequest.onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

// getJSON("http://localhost:8090/zero")
//   .then(
//     (json) => {
//       console.log(json);
//     },
//     (error) => {
//       console.log(error);
//     },
//   )
//   .catch();

const sleep = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

const getResult = async () => {
  // getJSON("http://localhost:8090/zero").then((result) => {
  //   console.log(result);
  // });

  // const result =  yield getJSON("http://localhost:8090/zero");
  // const result = await getJSON("http://localhost:8090/zero");
  // console.log(result);

  for (let index = 1; index < 6; index++) {
    await getJSON("http://localhost:8090/zero")
      .then((result) => {
        console.log("1------" + JSON.stringify(result));
        // 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
        return result;
      })
      .then((result) => {
        console.log(result);
      });
    // const result = await getJSON("http://localhost:8090/zero");
    // if (!result) {
    //   console.log("Fail");
    //   return;
    // }
    // console.log(result);
    // await sleep(3000);
  }

  console.log("Done");
};
