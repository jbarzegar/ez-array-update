import typeOf from "just-typeof";

/**
 * @name updateArray
 * @param {array} array The array you want to update an element in
 * @param {function} filter A function that is used to determine what element(s) should be updated
 * @param {any} updateData A value used to update the element(s) selected via the `filter` method
 * @returns {array} Your updated array
 */

export default function updateArray(
  array: any[],
  filter: (value: any, index: number) => boolean,
  updateData: any
): Array<any> {
  if (!Array.isArray(array))
    throw new TypeError("Argument was not a type of: Array");

  if (typeof filter !== "function")
    throw new Error(`'filter' is not a function`);

  const arrayIndex = array.findIndex(filter);

  // If it's an object handle it differently
  if (typeOf(updateData) === "object") {
    return Object.assign([...array], {
      [arrayIndex]: { ...array[arrayIndex], ...updateData }
    });
  }

  return Object.assign([...array], {
    [arrayIndex]: updateData
  });
}
