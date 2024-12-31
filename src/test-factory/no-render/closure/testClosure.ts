export {};

const closureLoopDanger = () => {
  // eslint-disable-next-line no-var
  for (var index = 1; index <= 5; index++) {
    // eslint-disable-next-line no-loop-func
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
};

const closureLoopIIFE = () => {
  // eslint-disable-next-line no-var
  for (var index = 1; index <= 5; index++) {
    // IIFE @see https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    ((index) => {
      setTimeout(() => {
        console.log(index);
      }, index * 1000);
    })(index);
  }
};

const closureLoopES6 = () => {
  for (let index = 1; index <= 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
};

// closureLoopIIFE();
// closureLoopDanger();
closureLoopES6();
