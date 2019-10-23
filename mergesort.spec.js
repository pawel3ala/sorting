describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      let arr = [1,2,3,4,5]
      expect(split(arr)).toEqual([[1,2],[3,4,5]])
    });
    it('is able to split an array into two halves(even)', function() {
        // your code here 
        let arr = [1,2,3,4]
        expect(split(arr)).toEqual([[1,2],[3,4]])
      });
      it('one element', function() {
        // your code here 
        let arr = [1]
        expect(split(arr)).toEqual([1])
      });
  });
    describe('Bubble Sort', function(){
        it('dsgdsgfds', function(){
        expect( mergeSort([234,54235,2213,53426,123423,45]) ).toEqual([45,234,2213,53426,54235,123423] );
        });
  });


