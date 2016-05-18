function split(wholeArray) {

  var len = wholeArray.length;
  var splitNum = Math.floor(len/2);
  var firstHalf = wholeArray.slice(0,splitNum);
  var secondHalf = wholeArray.slice(splitNum);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var newArr = [];
  var arr1Count = 0;
  var arr2Count = 0;

while(arr1Count < arr1.length || arr2Count < arr2.length){
  
  console.log(arr2.slice(arr2Count))
  console.log('arr1', arr1Count)
  
  console.log('arr2', arr2Count)
  if(arr2[arr2Count] === undefined){
    newArr.concat(arr1.slice(arr1Count));
    arr1Count = arr1.length
  }
  if(arr1[arr1Count] === undefined){
    newArr.concat(arr2.slice(arr2Count));
    arr2Count = arr2.length
  }

  if(arr2[arr2Count] < arr1[arr1Count]){
      newArr.push(arr2[arr2Count]);
      arr2Count++;
    }else{
      newArr.push(arr1[arr1Count]);
      arr1Count++;
    }
      
  }
  
  return newArr;
}


function mergeSort(array) {

  /* your code here */ //split(wholeArray)

}





