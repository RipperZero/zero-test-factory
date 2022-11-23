import { differenceBy } from "../differenceBy";

console.log(differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x"));
