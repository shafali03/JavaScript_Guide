
let twoD = [[1, 2, 3, 4, 5, 6, 7],
            [8, 10, 5, 3, 6, 42],
            [123, 54, 12, 11, 7, 15]];


// nested for loops
let rows = twoD.length;
for(let i=0; i<rows; i++) {
  let items = twoD[i].length;
  console.log(i, items) // return number of item  in array
  for(let n=0; n<items; n++) {
    console.log( twoD[i][n]);
  }
}






let bigHero = {characters: [
  {name: 'Hiro', voice: 'Ryan Potter'},
  {name: 'Baymax', voice: 'Scott Smith', prop:12},
  {name: 'Go Go', voice: 'James Hot'},
]}


let chars = bigHero['characters']; 
for(let i=0, len=chars.length; i<len; i++) {
  for(let prop in chars[i] {
    console.log(prop, chars[i].prop, chars[i][prop]);
  })
}
