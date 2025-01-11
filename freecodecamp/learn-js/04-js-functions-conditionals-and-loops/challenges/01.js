function getPlanetName(id) {
  let name;
  switch (id) {
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
  }
  
  return name
}

let result = getPlanetName(5)
console.log(result)
