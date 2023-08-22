// 두 문자열이 서로 아나그램인 경우 true를 반환합니다.
// 모든 입력값은 단어로 구성되어 있으며(공백, 마침표, 구두점, 숫자를 고려하지 않는다),
//              소문자로 이루어져 있다고 가정한다.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (const key of str1) map1.set(key, (map1.get(key) || 0) + 1);
  for (const key of str2) map2.set(key, (map2.get(key) || 0) + 1);

  if (map1.size !== map2.size) return false;

  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }

  return true;
}

console.log(validAnagram("anagram", "anagram"));
