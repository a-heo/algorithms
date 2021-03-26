function bubbleSort(array) {
    // Write your code here.
      //assign var for current = zero index
      //assign var for sort = false 
      //assign var for swap = 0
      //while sort is false 
      //iterate through array
      //assign temp variable for swap 
      //if current is more than next index
      //temp will be current
      //reassign current to be next index
      //next index will be temp value 
      //swap goes up; 
      //if swap is 0
      //sort will be true 
      
      return array; 
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
  
  /*
  8, 5, 2, 9, 5, 6, 3
  5, 8, 2, 9, 5, 6, 3
  5, 2, 8, 9, 5, 6, 3
  5, 2, 8, 9, 5, 6, 3
  5, 2, 8, 5, 9, 6, 3
  5, 2, 8, 5, 6, 9, 3
  5, 2, 8, 5, 6, 3, 9
  
  5, 2, 8, 5, 6, 3, 9
  2, 5, 8, 5, 6, 3, 9
  2, 5, 8, 5, 6, 3, 9
  2, 5, 5, 8, 6, 3, 9
  2, 5, 5, 6, 8, 3, 9
  2, 5, 5, 6, 3, 8, 9
  2, 5, 5, 6, 3, 8, 9
  
  2, 5, 5, 6, 3, 8, 9
  2, 5, 5, 3, 6, 8, 9
  
  2, 5, 5, 3, 6, 8, 9
  2, 5, 3, 5, 6, 8, 9
  
  2, 5, 3, 5, 6, 8, 9
  2, 3, 5, 5, 6, 8, 9
  */