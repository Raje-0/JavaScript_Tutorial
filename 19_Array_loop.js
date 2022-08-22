let num=[3,5,4,7,8]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
num.forEach((element) => {
    console.log(element * element)
  })

  // Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
    console.log(item)
  }
  
  // for...in
  for (let i in num){
    console.log(num[i])
  }