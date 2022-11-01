export function merge(collection_1: number[], collection_2: number[]): number[] {
  if (collection_1.length === 0 || collection_2.length === 0) {
    // if the one of two collections is empty array, then return the another
    return collection_1.length === 0 ? collection_2 : collection_1;
  }
  let index1 = 0; // pointer to index in collection_1
  let index2 = 0; // pointer to index in collection_2
  let result: number[] = [];
  while (index1 < collection_1.length && index2 < collection_2.length) {
    if (collection_1[index1] < collection_2[index2]) {
      result.push(collection_1[index1]);
      index1++;
    } else {
      result.push(collection_2[index2]);
      index2++;
    }
  }
  if (index1 < collection_1.length) {
    for (let i = index1; i < collection_1.length; i++) {
      result.push(collection_1[i]);
    }
  }
  if (index2 < collection_2.length) {
    for (let i = index2; i < collection_2.length; i++) {
      result.push(collection_2[i]);
    }
  }
  return result;
}
