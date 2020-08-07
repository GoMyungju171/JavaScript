var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];

    // 코드를 작성해주세요.
    for(var i = 0; i < arr.length; i++) { 
      //배열 하나씩 reverse로 거꾸로 만들기
      arr[i] = arr[i].reverse();
      for(var j = 0; j < arr[i].length; j++) {
        //거꾸로 된 거 하나씩 returnArr에 넣기
        returnArr.push(arr[i][j]);
      }
}
      
  
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));