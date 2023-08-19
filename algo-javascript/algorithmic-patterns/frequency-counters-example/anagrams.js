// 두 문자열이 서로 아나그램인 경우 true를 반환합니다.
// 모든 입력값은 단어로 구성되어 있으며(공백, 마침표, 구두점, 숫자를 고려하지 않는다),
//              소문자로 이루어져 있다고 가정한다.

function validAnagram(str1, str2) {
  if (str1 === str2) return true;

  for (const alphabet of str1) {
    console.log(alphabet);
    console.log(str2);
  }
}

console.log(validAnagram("anagram", "nagaram"));
