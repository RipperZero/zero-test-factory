// @see https://dmitripavlutin.com/react-hooks-stale-closures/
// https://dilshankelsen.com/understanding-stale-closures-in-javascript/

const createIncrement = (addValue) => {
  // primitive value(stack)
  let value = 0;
  // reference value(heap)
  const obj = { value: 0 };

  const increment = () => {
    value += addValue;
    console.log("value---" + value);
    obj.value += addValue;
    console.log("obj.value---" + obj.value);
  };

  // primitive value(stack)
  let copyValue = value;
  // reference value(heap)
  const copyObj = obj;
  const log = () => {
    console.log(`Current copyValue is ${copyValue}`);
    console.log(`Current value is ${value}`);
    console.log(`Current obj.value is ${obj.value}`);
    console.log(`Current copyObj.value is ${copyObj.value}`);
  };

  return [increment, log];
};

const [increment, log] = createIncrement(1);
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
// Does not work!
log();
