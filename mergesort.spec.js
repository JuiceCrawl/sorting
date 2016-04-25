describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5])).toEqual ( [[1, 2], [3,4,5]] ) ;
  });

  it('calls itself n times', function() {
      spyOn(window, 'mergeSort').and.callThrough();
      var array = [8,4,3,7,2];
      mergeSort(array);
      expect(mergeSort.calls.count()).toEqual(array.length);
  });



});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });







  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('sorts array of 2',function(){
    expect ( mergeSort([5,4]) ).toEqual ( [4,5] );
  });

  it('sorts a longer array',function(){
    expect ( mergeSort([5,4,3,2,1]) ).toEqual ( [1,2,3,4,5] );
  });

  it('calls itself n times', function() {
      spyOn(window, 'mergeSort').and.callThrough();
      var array = [8,4,3,7,2];
      mergeSort(array);
      expect(mergeSort.calls.count()).toEqual(array.length);
  });

});
