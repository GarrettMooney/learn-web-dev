// `repeat_str` repeats the given string `str` exactly `count` times

function repeat_str (count, str) {
  return str.repeat(count);
}

let result = repeat_str(3, "*" )
console.log(result)

result = repeat_str(5, "#" )
console.log(result)

result = repeat_str(2, "ha ")
console.log(result)
