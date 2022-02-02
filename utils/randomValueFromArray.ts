export default function randomValueFromArray(array: Array<string>) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
