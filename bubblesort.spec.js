describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts array of 2',function(){
    expect ( bubbleSort([5,4]) ).toEqual ( [4,5] );
  });

  it('sorts a longer array',function(){
    expect ( bubbleSort([5,4,3,2,1]) ).toEqual ( [1,2,3,4,5] );
  });

  it('calls itself n times', function() {
      spyOn(window, 'bubbleSort').and.callThrough();
      var array = [8,4,3,7,2];
      bubbleSort(array);
      expect(bubbleSort.calls.count()).toEqual(array.length);
  });

  //determine presorted array and kows not the check. doesnt recures

//sort and array of [1], [1,2], more
// odd number array sort check

//worst case
//best case

//recursion option:
//num of iterations, num of recurrsion called - 3,2,1 --- 2,3,1  --- 2,1,3 --- 1,2,3 --- last check?
// 4,3,2,1 - 

//loop counter
//

//always only 1 array vs merge

});

