function vowels(str) {
  let arr = str.toLowerCase().split('')

  let count = 0
  const vov = ['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы']

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < vov.length; j++) {
      if (arr[i] === vov[j]) {
        count++
      }
    }
  }

  console.log(count)
  return count
}