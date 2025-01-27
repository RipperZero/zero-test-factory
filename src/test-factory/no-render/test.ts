import { listify } from "radash";

const fish = {
  marlin: true,
  bass: false,
  aaaa: true,
  bbbb: false,
};

console.log(listify(fish, (key, value) => key));
