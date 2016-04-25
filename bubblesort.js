function bubbleSort(array) {
  if(array.length < 2){ return array;}

  var one;
  var two;

  for (var i = 0; i < array.length-1; i++) {
    one = array[i];
    two = array[i+1];

    array[i] = two;
    array[i+1] = one;
  }

  return bubbleSort(array.slice(0,-1)).concat(array[array.length-1]);

}