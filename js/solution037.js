// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


function invert(array) {
  
    let answer = []
    for(let i = 0; i < array.length; i++){
        if(Math.sign(array[i]) === 1){
            answer.push(array[i] * -1)
        }else{
            answer.push(array[i] * -1)
        }
    }
  return answer
}
  


console.log(invert([1,-2,3,-4,5]))

// const invert = array => array.map(num => -num);