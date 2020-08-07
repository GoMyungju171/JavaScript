function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
  if (myAge === yourAge) { // 1. 나이가 같은 경우
    return "친구"
  } else if (myAge > yourAge) { // 2. 내가 더 많은 경우
    if (yourGender === "male") { //2-1. 상대가 남자라면
      return "남동생"
    } else { // 2-2. 상대가 여자라면
      return "여동생"
    }
  } else if (myGender === 'female' && yourGender === 'female') {// 3-1. 상대가 더 나이가 많고 내가 여자인 경우 중 상대도 여자인 경우 
    return "언니";
  } else if (myGender === 'female' && yourGender === 'male') { //  3-2. 상대가 남자인 경우 
    return "오빠";
  } else if (yourGender === 'male') {// 4-1. 상대가 더 나이가 많고 내가 남자인 경우 중 상대도 남자인 경우 
    return "형";
  } else {// 4-2. 상대가 여자인 경우
    return "누나"
  }

  
}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);