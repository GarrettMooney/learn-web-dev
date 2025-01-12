// return input years in [human,cat,dog] years
//
// human -> cat
// 1st year: 15:1
// 2nd year: 9:1
// 3rd year: 4:1
//
//
// human -> dog
// 1st year: 15:1
// 2nd year: 9:1
// 3rd year: 5:1

function humanToCatYears (age) {
  if (age == 1) {
    return 15
  }
  if (age == 2) {
    return 24
  }
  if (age > 2) {
    return 24 + (age-2) * 4
  }
}

function humanToDogYears (age) {
  if (age == 1) {
    return 15
  }
  if (age == 2) {
    return 24
  }
  if (age > 2) {
    return 24 + (age-2) * 5
  }
}

function convert (age) {
  return [age, humanToCatYears(age), humanToDogYears(age)]
}
