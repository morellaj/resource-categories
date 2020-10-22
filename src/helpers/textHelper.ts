export default function (text: string) {
  let label = '';
  let description = '';
  if (text.includes(':')) {
    let arr = text.split(': ');
    label = arr[0];
    description = arr[1];
  } else {
    label = text;
    let arr = text.split(/(?=[A-Z])/);
    arr.forEach((str, i) => {
      let stringToAdd;
      if (i === 0) {
        stringToAdd = str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        stringToAdd = ' ' + str.toLowerCase();
      }
      description += stringToAdd;
    });
  }
  return [label, description];
}
