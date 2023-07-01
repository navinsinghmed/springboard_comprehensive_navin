function unroll(arr) {
    //initialize idx boundaries of spiral
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;
    
    //initialize direction to traverse
    let dir = 0;
    
    //final unrolled arr to be returned
    let unrolledArr = [];
  
    while (top <= bottom && left <= right) {
      if (dir === 0) { // going right
        for (let i = left; i <= right; i++) {
          unrolledArr.push(arr[top][i]);
        }
        top++;
      } else if (dir === 1) { // going downward
        for (let i = top; i <= bottom; i++) {
          unrolledArr.push(arr[i][right]);
        }
        right--;
      } else if (dir === 2) { // going toward the left
        for (let i = right; i >= left; i--) {
          unrolledArr.push(arr[bottom][i]);
        }
        bottom--;
      } else if (dir === 3) { // going upward
        for (let i = bottom; i >= top; i--) {
          unrolledArr.push(arr[i][left]);
        }
        left++;
      }
      dir = (dir + 1) % 4;
    }
  
    return unrolledArr;
  }
  
  module.exports = unroll;