export default function (text: string) {
  let arr = text.split(':');
  const label = arr[0];
  const age = parseInt(arr[1]) == NaN ? 4 : parseInt(arr[1]);
  const description = arr.length === 2 ? 
    arr[2] :

  if (arr[2]) {
    
  }

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
  return [label, age, description];
}

const labelToDescription = (label) => {

}