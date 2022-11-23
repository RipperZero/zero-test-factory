// @see https://segmentfault.com/a/1190000022913676

const hero1 = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};
const hero2 = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};

const shallowEqual = (src, tar) => {
  const valueKeys = Object.keys(src);
  const otherKeys = Object.keys(tar);

  if (valueKeys.length !== otherKeys.length) {
    return false;
  }

  for (let index = 0; index < valueKeys.length; index++) {
    const srcValue = src[valueKeys[index]];
    const tarValue = tar[otherKeys[index]];

    if (srcValue !== tarValue) {
      return false;
    }
  }

  return true;
};
console.log(shallowEqual(hero1, hero2));

const isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};

const deepEqual = (src, tar) => {
  const valueKeys = Object.keys(src);
  const otherKeys = Object.keys(tar);

  if (valueKeys.length !== otherKeys.length) {
    return false;
  }

  for (let index = 0; index < valueKeys.length; index++) {
    const srcValue = src[valueKeys[index]];
    const tarValue = tar[otherKeys[index]];

    const bothObject = isObject(srcValue) && isObject(tarValue);

    if (
      (!bothObject && srcValue !== tarValue) ||
      (bothObject && !deepEqual(srcValue, tarValue))
    ) {
      return false;
    }
  }

  return true;
};
console.log(deepEqual(hero1, hero2));
