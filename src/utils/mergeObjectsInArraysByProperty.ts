import { pluck, uniq } from "ramda";

const mergeObjectsInArraysByProperty = <T>(
  arrays: T[][],
  prop: keyof T
): T[] => {
  const allItems = arrays.reduce((acc, array) => [...acc, ...array], []);

  return uniq(pluck(prop, allItems)).map((val) =>
    allItems
      .filter((item) => item[prop] === val)
      .reduce((acc, item) => ({ ...acc, ...item }), {} as T)
  );
};

export default mergeObjectsInArraysByProperty;
