


Find duplicate elements in an array.
arr = [10,20,25,20,10,33,21,10];

function FindDuplicate(){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i]) !== i && !ic){
result.push(arr[i])
       }
        
    }
    return result;

}

console.log(FindDuplicate());


let str = "aabbccffrrggg";

function findCount(){
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if(str[i] === str[i+1]){
        count++;
      }else{
        result += count + str[i]
        count = 1;
      }
        
    }
    return result;
}
console.log(findCount());


word[i] > longest.length
logest = word[i];

let arr = [45, 12, 89, 23, 67];

function findMax(){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        
        
    }
    return max;
}
console.log(findMax());
